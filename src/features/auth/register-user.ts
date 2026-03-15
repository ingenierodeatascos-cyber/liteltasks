import type { RegisterInput } from "../../validations/register";

type CreateUserData = {
  email: string;
  passwordHash: string;
};

type RegisterUserDependencies = {
  findUserByEmail: (email: string) => Promise<{ id: number } | null>;
  createUser: (data: CreateUserData) => Promise<{ id: number; email: string }>;
  hashPassword: (password: string) => Promise<string>;
};

export type RegisterUserResult =
  | { success: true }
  | { success: false; reason: "EMAIL_EXISTS" | "UNKNOWN_ERROR" };

async function getDefaultDependencies(): Promise<RegisterUserDependencies> {
  const [{ prisma }, { hashPassword }] = await Promise.all([
    import("../../db/prisma"),
    import("./password"),
  ]);

  return {
    findUserByEmail: (email) =>
      prisma.user.findUnique({
        where: { email },
        select: { id: true },
      }),
    createUser: (data) =>
      prisma.user.create({
        data,
        select: { id: true, email: true },
      }),
    hashPassword,
  };
}

export async function registerUser(
  input: RegisterInput,
  dependencies?: RegisterUserDependencies,
): Promise<RegisterUserResult> {
  const resolvedDependencies = dependencies ?? (await getDefaultDependencies());

  const existingUser = await resolvedDependencies.findUserByEmail(input.email);

  if (existingUser) {
    return {
      success: false,
      reason: "EMAIL_EXISTS",
    };
  }

  try {
    const passwordHash = await resolvedDependencies.hashPassword(input.password);

    await resolvedDependencies.createUser({
      email: input.email,
      passwordHash,
    });

    return { success: true };
  } catch {
    return {
      success: false,
      reason: "UNKNOWN_ERROR",
    };
  }
}

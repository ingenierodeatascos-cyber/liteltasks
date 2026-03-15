import type { RegisterInput } from "../../validations/register";

type LoginUserDependencies = {
  findUserByEmail: (
    email: string,
  ) => Promise<{ id: number; passwordHash: string } | null>;
  verifyPassword: (password: string, passwordHash: string) => Promise<boolean>;
};

export type LoginUserResult =
  | { success: true; userId: number }
  | { success: false; reason: "INVALID_CREDENTIALS" | "UNKNOWN_ERROR" };

async function getDefaultDependencies(): Promise<LoginUserDependencies> {
  const [{ prisma }, passwordUtils] = await Promise.all([
    import("../../db/prisma"),
    import("./password"),
  ]);

  return {
    findUserByEmail: (email) =>
      prisma.user.findUnique({
        where: { email },
        select: { id: true, passwordHash: true },
      }),
    verifyPassword: passwordUtils.verifyPassword,
  };
}

export async function loginUser(
  input: RegisterInput,
  dependencies?: LoginUserDependencies,
): Promise<LoginUserResult> {
  const resolvedDependencies = dependencies ?? (await getDefaultDependencies());

  try {
    const user = await resolvedDependencies.findUserByEmail(input.email);

    if (!user) {
      return {
        success: false,
        reason: "INVALID_CREDENTIALS",
      };
    }

    const passwordMatches = await resolvedDependencies.verifyPassword(
      input.password,
      user.passwordHash,
    );

    if (!passwordMatches) {
      return {
        success: false,
        reason: "INVALID_CREDENTIALS",
      };
    }

    return {
      success: true,
      userId: user.id,
    };
  } catch {
    return {
      success: false,
      reason: "UNKNOWN_ERROR",
    };
  }
}

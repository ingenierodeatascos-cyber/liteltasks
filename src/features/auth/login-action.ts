"use server";

import { redirect } from "next/navigation";

import { loginUser } from "@/features/auth/login-user";
import { createUserSession } from "@/features/auth/session";
import {
  validateRegisterInput,
  type RegisterValidationErrors,
} from "@/validations/register";

export type LoginActionState = {
  success: boolean;
  fieldErrors?: RegisterValidationErrors;
  formError?: string;
};

export async function loginAction(
  _previousState: LoginActionState,
  formData: FormData,
): Promise<LoginActionState> {
  const email = formData.get("email");
  const password = formData.get("password");

  const validation = validateRegisterInput({
    email: typeof email === "string" ? email : undefined,
    password: typeof password === "string" ? password : undefined,
  });

  if (!validation.success) {
    return {
      success: false,
      fieldErrors: validation.errors,
    };
  }

  const result = await loginUser(validation.data);

  if (!result.success && result.reason === "INVALID_CREDENTIALS") {
    return {
      success: false,
      formError: "Invalid email or password.",
    };
  }

  if (!result.success) {
    return {
      success: false,
      formError: "We could not sign you in. Please try again.",
    };
  }

  await createUserSession(result.userId);
  redirect("/dashboard");
}

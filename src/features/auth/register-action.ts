"use server";

import { registerUser } from "@/features/auth/register-user";
import {
  validateRegisterInput,
  type RegisterValidationErrors,
} from "@/validations/register";

export type RegisterActionState = {
  success: boolean;
  fieldErrors?: RegisterValidationErrors;
  formError?: string;
};

export async function registerAction(
  _previousState: RegisterActionState,
  formData: FormData,
): Promise<RegisterActionState> {
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

  const result = await registerUser(validation.data);

  if (!result.success && result.reason === "EMAIL_EXISTS") {
    return {
      success: false,
      fieldErrors: {
        email: "This email is already registered.",
      },
    };
  }

  if (!result.success) {
    return {
      success: false,
      formError: "We could not create your account. Please try again.",
    };
  }

  return {
    success: true,
  };
}

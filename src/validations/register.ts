export type RegisterInput = {
  email: string;
  password: string;
};

export type RegisterValidationErrors = {
  email?: string;
  password?: string;
};

export type RegisterValidationResult =
  | {
      success: true;
      data: RegisterInput;
      errors: {};
    }
  | {
      success: false;
      data: RegisterInput;
      errors: RegisterValidationErrors;
    };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateRegisterInput(
  input: Partial<RegisterInput>,
): RegisterValidationResult {
  const data: RegisterInput = {
    email: typeof input.email === "string" ? input.email.trim() : "",
    password: typeof input.password === "string" ? input.password : "",
  };

  const errors: RegisterValidationErrors = {};

  if (!data.email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(data.email)) {
    errors.email = "Email must be valid.";
  }

  if (!data.password.trim()) {
    errors.password = "Password is required.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      data,
      errors,
    };
  }

  return {
    success: true,
    data,
    errors: {},
  };
}

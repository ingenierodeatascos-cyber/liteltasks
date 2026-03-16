export type TaskInput = {
  title: string;
  description: string | null;
};

export type TaskValidationErrors = {
  title?: string;
};

export type TaskValidationResult =
  | {
      success: true;
      data: TaskInput;
      errors: {};
    }
  | {
      success: false;
      data: TaskInput;
      errors: TaskValidationErrors;
    };

export function validateTaskInput(
  input: Partial<{ title: string; description: string }>,
): TaskValidationResult {
  const data: TaskInput = {
    title: typeof input.title === "string" ? input.title.trim() : "",
    description:
      typeof input.description === "string" && input.description.trim()
        ? input.description.trim()
        : null,
  };

  const errors: TaskValidationErrors = {};

  if (!data.title) {
    errors.title = "Title is required.";
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

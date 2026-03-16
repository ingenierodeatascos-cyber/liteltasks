"use server";

import { redirect } from "next/navigation";

import { getUserSession } from "@/features/auth/session";
import { createTask } from "@/features/tasks/create-task";
import {
  validateTaskInput,
  type TaskValidationErrors,
} from "@/validations/task";

export type CreateTaskActionState = {
  success: boolean;
  fieldErrors?: TaskValidationErrors;
  formError?: string;
};

export async function createTaskAction(
  _previousState: CreateTaskActionState,
  formData: FormData,
): Promise<CreateTaskActionState> {
  const session = await getUserSession();

  if (!session) {
    redirect("/login");
  }

  const title = formData.get("title");
  const description = formData.get("description");

  const validation = validateTaskInput({
    title: typeof title === "string" ? title : undefined,
    description: typeof description === "string" ? description : undefined,
  });

  if (!validation.success) {
    return {
      success: false,
      fieldErrors: validation.errors,
    };
  }

  try {
    await createTask(session.userId, validation.data);
  } catch {
    return {
      success: false,
      formError: "We could not create the task. Please try again.",
    };
  }

  redirect("/dashboard");
}

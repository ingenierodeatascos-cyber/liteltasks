"use server";

import { redirect } from "next/navigation";

import { getUserSession } from "@/features/auth/session";
import { toggleTaskStatus } from "@/features/tasks/toggle-task-status";

export async function toggleTaskStatusAction(formData: FormData) {
  const session = await getUserSession();

  if (!session) {
    redirect("/login");
  }

  const taskIdValue = formData.get("taskId");
  const completedValue = formData.get("completed");

  const taskId =
    typeof taskIdValue === "string" ? Number.parseInt(taskIdValue, 10) : NaN;
  const completed = completedValue === "true";

  if (Number.isNaN(taskId)) {
    redirect("/dashboard");
  }

  await toggleTaskStatus(taskId, session.userId, completed);
  redirect("/dashboard");
}

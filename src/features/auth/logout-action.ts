"use server";

import { redirect } from "next/navigation";

import { clearUserSession } from "@/features/auth/session";

export async function logoutAction() {
  await clearUserSession();
  redirect("/login");
}

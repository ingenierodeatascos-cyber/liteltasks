import { cookies } from "next/headers";
import { createSessionToken } from "./session-token";

const SESSION_COOKIE_NAME = "liteltasks_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

export async function createUserSession(userId: number) {
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE_NAME, createSessionToken({ userId }), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
}

export { SESSION_COOKIE_NAME };

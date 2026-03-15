import { logoutAction } from "@/features/auth/logout-action";

export function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button className="submitButton secondaryButton" type="submit">
        Sign out
      </button>
    </form>
  );
}

import { loginAction } from "@/features/auth/login-action";
import { LoginForm } from "@/features/auth/ui/login-form";
import { PlaceholderPage } from "@/lib/ui/placeholder-page";

export default function LoginPage() {
  return (
    <PlaceholderPage
      eyebrow="Auth module"
      title="Sign in to LiteTasks"
      description="Enter your credentials to start a session and continue to your private dashboard."
    >
      <LoginForm action={loginAction} />
    </PlaceholderPage>
  );
}

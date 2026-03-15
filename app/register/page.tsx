import { registerAction } from "@/features/auth/register-action";
import { RegisterForm } from "@/features/auth/ui/register-form";
import { PlaceholderPage } from "@/lib/ui/placeholder-page";

export default function RegisterPage() {
  return (
    <PlaceholderPage
      eyebrow="Auth module"
      title="Create your LiteTasks account"
      description="Register with your email and password to start using the MVP. This flow validates your data, hashes the password and stores the new user."
    >
      <RegisterForm action={registerAction} />
    </PlaceholderPage>
  );
}

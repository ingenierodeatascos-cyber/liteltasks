import { redirect } from "next/navigation";

import { getUserSession } from "@/features/auth/session";
import { LogoutButton } from "@/features/auth/ui/logout-button";
import { PlaceholderPage } from "@/lib/ui/placeholder-page";
import { TasksEmptyState } from "@/features/tasks/ui/tasks-empty-state";

export default async function DashboardPage() {
  const session = await getUserSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <PlaceholderPage
      eyebrow="Tasks module"
      title="Dashboard base disponible"
      description="Aquesta vista és una base privada del producte. L'accés està restringit a usuaris amb sessió activa i encara no està connectada a dades."
    >
      <LogoutButton />
      <TasksEmptyState />
    </PlaceholderPage>
  );
}

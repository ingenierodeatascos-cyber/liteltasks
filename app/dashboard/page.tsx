import { redirect } from "next/navigation";

import { getUserSession } from "@/features/auth/session";
import { LogoutButton } from "@/features/auth/ui/logout-button";
import { TasksEmptyState } from "@/features/tasks/ui/tasks-empty-state";
import { AppShell } from "@/lib/ui/app-shell";

export default async function DashboardPage() {
  const session = await getUserSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <AppShell>
      <section className="dashboard">
        <header className="dashboardHeader">
          <div>
            <p className="eyebrow">Tasks module</p>
            <h1 className="dashboardTitle">Private dashboard</h1>
            <p className="dashboardLead">
              Base private area ready for the next task increments. This layout
              reserves space for task creation and the personal task list.
            </p>
          </div>
          <LogoutButton />
        </header>

        <section className="dashboardGrid">
          <section className="card dashboardPanel">
            <h2>New task form</h2>
            <p>
              This area is reserved for the task creation form that will be
              implemented in the next tasks.
            </p>
          </section>

          <section className="card dashboardPanel">
            <h2>Your task list</h2>
            <TasksEmptyState />
          </section>
        </section>
      </section>
    </AppShell>
  );
}

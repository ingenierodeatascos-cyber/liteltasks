import { redirect } from "next/navigation";

import { getUserSession } from "@/features/auth/session";
import { LogoutButton } from "@/features/auth/ui/logout-button";
import { listTasks } from "@/features/tasks/list-tasks";
import { NewTaskForm } from "@/features/tasks/ui/new-task-form";
import { TaskList } from "@/features/tasks/ui/task-list";
import { AppShell } from "@/lib/ui/app-shell";

export default async function DashboardPage() {
  const session = await getUserSession();

  if (!session) {
    redirect("/login");
  }

  const tasks = await listTasks(session.userId);

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
            <NewTaskForm />
          </section>

          <section className="card dashboardPanel">
            <h2>Your task list</h2>
            <TaskList tasks={tasks} />
          </section>
        </section>
      </section>
    </AppShell>
  );
}

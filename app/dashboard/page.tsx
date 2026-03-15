import { PlaceholderPage } from "@/lib/ui/placeholder-page";
import { TasksEmptyState } from "@/features/tasks/ui/tasks-empty-state";

export default function DashboardPage() {
  return (
    <PlaceholderPage
      eyebrow="Tasks module"
      title="Dashboard base disponible"
      description="Aquesta vista és només una base tècnica. Encara no està protegida ni connectada a dades."
    >
      <TasksEmptyState />
    </PlaceholderPage>
  );
}

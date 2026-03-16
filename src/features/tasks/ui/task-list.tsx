import { toggleTaskStatusAction } from "../toggle-task-status-action";
import type { TaskListItem } from "../list-tasks";
import { TasksEmptyState } from "./tasks-empty-state";

type TaskListProps = {
  tasks: TaskListItem[];
};

function formatTaskDate(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return <TasksEmptyState />;
  }

  return (
    <div className="taskList">
      {tasks.map((task) => (
        <article className="taskCard" key={task.id}>
          <div className="taskCardHeader">
            <div>
              <h3>{task.title}</h3>
              {task.description ? <p>{task.description}</p> : null}
            </div>
            <div className="taskActions">
              <span className={task.completed ? "taskStatus done" : "taskStatus"}>
                {task.completed ? "Completed" : "Pending"}
              </span>
              <form action={toggleTaskStatusAction}>
                <input name="taskId" type="hidden" value={task.id} />
                <input
                  name="completed"
                  type="hidden"
                  value={task.completed ? "false" : "true"}
                />
                <button className="taskToggleButton" type="submit">
                  {task.completed ? "Mark as pending" : "Mark as completed"}
                </button>
              </form>
            </div>
          </div>

          <p className="taskMeta">Created {formatTaskDate(task.createdAt)}</p>
        </article>
      ))}
    </div>
  );
}

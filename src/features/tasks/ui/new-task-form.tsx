"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import {
  createTaskAction,
  type CreateTaskActionState,
} from "@/features/tasks/create-task-action";

export function NewTaskForm() {
  const initialCreateTaskActionState: CreateTaskActionState = {
    success: false,
  };

  const [state, formAction] = useActionState(
    createTaskAction,
    initialCreateTaskActionState,
  );

  return (
    <form action={formAction} className="taskForm">
      <div className="fieldGroup">
        <label className="fieldLabel" htmlFor="task-title">
          Title
        </label>
        <input
          className="fieldInput"
          id="task-title"
          name="title"
          type="text"
          placeholder="Write your next task"
          aria-invalid={Boolean(state.fieldErrors?.title)}
          aria-describedby={state.fieldErrors?.title ? "task-title-error" : undefined}
          required
        />
        {state.fieldErrors?.title ? (
          <p className="fieldError" id="task-title-error">
            {state.fieldErrors.title}
          </p>
        ) : null}
      </div>

      <div className="fieldGroup">
        <label className="fieldLabel" htmlFor="task-description">
          Description
        </label>
        <textarea
          className="fieldTextarea"
          id="task-description"
          name="description"
          placeholder="Optional details for this task"
          rows={5}
        />
      </div>

      {state.formError ? <p className="formError">{state.formError}</p> : null}

      <p className="taskFormHint">
        Tasks are saved to your private dashboard and linked to your active
        session.
      </p>

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="submitButton" type="submit" disabled={pending}>
      {pending ? "Adding task..." : "Add task"}
    </button>
  );
}

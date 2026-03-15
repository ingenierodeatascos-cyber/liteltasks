"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import {
  type RegisterActionState,
} from "@/features/auth/register-action";

type RegisterFormProps = {
  action: (
    state: RegisterActionState,
    formData: FormData,
  ) => Promise<RegisterActionState>;
};

export function RegisterForm({ action }: RegisterFormProps) {
  const initialRegisterActionState: RegisterActionState = {
    success: false,
  };

  const [state, formAction] = useActionState(action, initialRegisterActionState);

  return (
    <form action={formAction} className="authForm">
      <div className="fieldGroup">
        <label className="fieldLabel" htmlFor="email">
          Email
        </label>
        <input
          className="fieldInput"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={Boolean(state.fieldErrors?.email)}
          aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
          required
        />
        {state.fieldErrors?.email ? (
          <p className="fieldError" id="email-error">
            {state.fieldErrors.email}
          </p>
        ) : null}
      </div>

      <div className="fieldGroup">
        <label className="fieldLabel" htmlFor="password">
          Password
        </label>
        <input
          className="fieldInput"
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="Create a password"
          aria-invalid={Boolean(state.fieldErrors?.password)}
          aria-describedby={state.fieldErrors?.password ? "password-error" : undefined}
          required
        />
        {state.fieldErrors?.password ? (
          <p className="fieldError" id="password-error">
            {state.fieldErrors.password}
          </p>
        ) : null}
      </div>

      {state.formError ? <p className="formError">{state.formError}</p> : null}
      {state.success ? (
        <p className="formSuccess">
          Account created successfully. You can continue with login in the next
          task.
        </p>
      ) : null}

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="submitButton" type="submit" disabled={pending}>
      {pending ? "Creating account..." : "Create account"}
    </button>
  );
}

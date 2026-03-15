"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { type LoginActionState } from "@/features/auth/login-action";

type LoginFormProps = {
  action: (
    state: LoginActionState,
    formData: FormData,
  ) => Promise<LoginActionState>;
};

export function LoginForm({ action }: LoginFormProps) {
  const initialLoginActionState: LoginActionState = {
    success: false,
  };

  const [state, formAction] = useActionState(action, initialLoginActionState);

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
          autoComplete="current-password"
          placeholder="Enter your password"
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

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="submitButton" type="submit" disabled={pending}>
      {pending ? "Signing in..." : "Sign in"}
    </button>
  );
}

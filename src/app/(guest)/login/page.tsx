"use client";

import React from "react";
import { LoginAction } from "./loginAction";

export default function Login() {
  const [isPending, startTransition] = React.useTransition();

  return (
    <div>
      login
      <button
        onClick={() => {
          startTransition(LoginAction);
        }}
        disabled={isPending}
      >
        login
      </button>
    </div>
  );
}

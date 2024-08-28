"use client";
import React from "react";
import { logoutAction } from "./logoutAction";

export default function Dashboard() {
  const [isPending, startTransition] = React.useTransition();

  return (
    <div>
      <h1>dashboard</h1>
      <button
        onClick={() => {
          startTransition(logoutAction);
        }}
        disabled={isPending}
      >
        logout
      </button>
    </div>
  );
}

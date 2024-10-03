"use client";

import { useFormStatus } from "react-dom";

export function FormSubmit() {
  const state = useFormStatus();

  return (
    <button
      disabled={state.pending}
      type="submit"
      className="rounded bg-blue-500 px-3 py-1.5 font-medium uppercase tracking-wide text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 active:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-400"
    >
      {state.pending ? "processing" : "refresh"}
    </button>
  );
}

"use client";

import React from "react";
import { AuthGuard } from "@src/components/AuthGuard";

export default function AuthLayout(props: React.PropsWithChildren) {
  return (
    <React.Suspense
      fallback={
        <div className="flex h-dvh w-dvw items-center justify-center">
          <div className="animate-spin">loading</div>
        </div>
      }
    >
      <AuthGuard>{props.children}</AuthGuard>;
    </React.Suspense>
  );
}

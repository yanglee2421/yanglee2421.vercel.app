import React from "react";
import { GuestGuard } from "@src/components/GuestGuard";

export default function GuestLayout(props: React.PropsWithChildren) {
  return (
    <React.Suspense
      fallback={
        <div className="flex h-dvh w-dvw items-center justify-center">
          <div className="animate-spin">loading</div>
        </div>
      }
    >
      <GuestGuard>{props.children}</GuestGuard>
    </React.Suspense>
  );
}

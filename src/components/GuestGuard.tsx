import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@src/auth";
import { SessionProvider } from "next-auth/react";

export async function GuestGuard(props: React.PropsWithChildren) {
  const session = await auth();

  if (!session) {
    return (
      <SessionProvider session={session}>{props.children}</SessionProvider>
    );
  }

  return redirect("/dashboard");
}

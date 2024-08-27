import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@src/auth";
import { SessionProvider } from "next-auth/react";

export async function AuthGuard(props: React.PropsWithChildren) {
  const session = await auth();

  if (!session) {
    return redirect("/login");
  }

  return <SessionProvider session={session}>{props.children}</SessionProvider>;
}

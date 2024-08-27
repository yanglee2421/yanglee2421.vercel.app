import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@src/auth";

export async function GuestGuard(props: React.PropsWithChildren) {
  const session = await auth();

  if (!session) {
    return props.children;
  }

  return redirect("/dashboard");
}

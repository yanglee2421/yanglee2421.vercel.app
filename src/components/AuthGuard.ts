"use client";
import "@src/api/firebase/app";
import React from "react";
import { getAuth } from "firebase/auth";
import { redirect } from "next/navigation";

export function AuthGuard(props: React.PropsWithChildren) {
  React.use(authReady);

  const currentUser = auth.currentUser;

  if (!currentUser) {
    return redirect("/login");
  }

  return props.children;
}

const auth = getAuth();
const authReady = auth.authStateReady();

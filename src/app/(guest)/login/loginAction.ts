"use server";
import { signIn } from "@src/auth";

export async function LoginAction() {
  await signIn("github");
}

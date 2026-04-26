"use server";
import { postgres } from "@/shared/instances/postgres";
import { schema } from "db/postgres";
import { and, eq } from "drizzle-orm";

interface SignupActionParams {
  email: string;
  password: string;
}

export const signupAction = async (params: SignupActionParams) => {
  const data = await postgres
    .insert(schema.users)
    .values({
      name: params.email,
      password: params.password,
    })
    .returning();

  return data;
};

interface LoginActionParams {
  email: string;
  password: string;
}

export const loginAction = async (params: LoginActionParams) => {
  const user = await postgres
    .select()
    .from(schema.users)
    .where(
      and(
        eq(schema.users.name, params.email),
        eq(schema.users.password, params.password),
      ),
    )
    .limit(1);

  return user;
};

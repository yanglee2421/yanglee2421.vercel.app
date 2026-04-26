"use server";
import { postgres } from "@/shared/instances/postgres";
import { atFirstOrThrow } from "@yotulee/run";
import { schema } from "db/postgres";
import { and, eq } from "drizzle-orm";

interface SignupActionParams {
  email: string;
  password: string;
}

export const signupAction = async (params: SignupActionParams) => {
  const data = await postgres.transaction(async (tx) => {
    const [roleGroup] = await tx
      .insert(schema.roleGroups)
      .values({ name: "default" })
      .returning();

    const role = await tx
      .insert(schema.roles)
      .values({ name: "owner", groupId: roleGroup.id });

    const results = await tx
      .insert(schema.users)
      .values({
        name: params.email,
        password: params.password,
        roleGroupId: roleGroup.id,
      })
      .returning();
  });

  return data;
};

interface LoginActionParams {
  email: string;
  password: string;
}

export const loginAction = async (params: LoginActionParams) => {
  const users = await postgres
    .select()
    .from(schema.users)
    .where(
      and(
        eq(schema.users.name, params.email),
        eq(schema.users.password, params.password),
      ),
    )
    .limit(1);

  const user = atFirstOrThrow(users);

  return user;
};

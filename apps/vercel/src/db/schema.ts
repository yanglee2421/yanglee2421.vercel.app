import { integer, pgSchema, pgTable, text } from "drizzle-orm/pg-core";

export const app = pgSchema("app");

export const users = app.table("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text("name"),
  password: text("password"),
});

export const sessions = app.table("sessions", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer("user_id").references(() => users.id),
  token: text("token"),
});

export const kvTable = pgTable("kv", {
  key: text("key").primaryKey(),
  value: text("value"),
});

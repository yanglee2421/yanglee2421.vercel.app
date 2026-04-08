import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { relations } from "./relations";
import * as schema from "./schema";

export type DB = ReturnType<typeof createDB>;

export const createDB = (connectionString: string) => {
  const client = new Pool({ connectionString, ssl: false });
  const db = drizzle({ schema, relations, client });

  return db;
};

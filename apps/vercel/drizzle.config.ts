import { defineConfig } from "drizzle-kit";

const url = process.env.PGSQL_URL!;

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url,
    ssl: false,
  },
});

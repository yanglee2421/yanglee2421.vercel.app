import { defineConfig } from "drizzle-kit";

// const POSTGRES_URL = process.env.POSTGRES_URL!;
const POSTGRES_URL =
  "postgresql://postgres.klibaldsvrxgtdraaugd:postgresql2026@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres";

export default defineConfig({
  schema: "./src/postgres/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: POSTGRES_URL,
    // ssl: false,
  },
});

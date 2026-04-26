import { createDB } from "db/postgres";

export const postgres = createDB(process.env.POSTGRES_URL!);

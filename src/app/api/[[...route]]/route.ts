import type { DB } from "@/db";
import { createDB } from "@/db";
import * as schema from "@/db/schema";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { handle } from "hono/vercel";

export const dynamic = "force-dynamic"; // 强制 Next.js 在运行时执行，不要在构建时静态预渲染

interface Env {
  Variables: {
    db: DB;
  };
  Bindings: {
    PGSQL_URL: string;
  };
}

const factory = createFactory<Env>({
  initApp: (app) => {
    app.use(async (c, next) => {
      const dbUrl =
        "postgresql://dev:-postgresql2026@pgm-bp18b9078f65495bno.pg.rds.aliyuncs.com:5432/nextjs";
      const db = createDB(dbUrl);

      c.set("db", db);
      await next();
    });
  },
});

const helloHanldes = factory.createHandlers(async (c) => {
  const db = c.var.db;

  const rows = await db.select().from(schema.users);

  return c.json({
    message: "Hello Next.js!",
    rows,
  });
});

const createRootApp = () => {
  const app = factory
    .createApp()
    .basePath("/api")
    .onError((error, c) => {
      console.error(error);

      return c.json({ message: error.message }, 500);
    })
    .notFound((c) => {
      return c.json({ message: "Not Found" }, 404);
    })
    .use(logger());

  return app;
};

const createMockApp = () => {
  const app = factory.createApp();

  app.get("/hello", ...helloHanldes);

  return app;
};

const createApp = () => {
  const app = createRootApp();
  const mock = createMockApp();

  app.route("/", mock);

  return app;
};

const app = createApp();

export const GET = handle(app);
export const POST = handle(app);

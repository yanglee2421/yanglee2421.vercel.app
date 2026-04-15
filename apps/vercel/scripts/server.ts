#!/usr/bin/env node
import next from "next";
import { createServer } from "node:http";

const bootstrap = async () => {
  const app = next({ dev: true });
  const handle = app.getRequestHandler();
  const server = createServer(handle);

  await app.prepare();

  server.listen(3000, () => {
    console.log("> Ready on http://localhost:3000");
  });
};

bootstrap();

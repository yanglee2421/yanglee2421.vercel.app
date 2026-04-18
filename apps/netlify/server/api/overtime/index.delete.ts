import { z } from "zod";
import { appendCors } from "~~/server/utils";

const bodySchema = z.object({
  id: z.string().array(),
});

export default defineEventHandler(async (e) => {
  appendCors(e);
  const body = readValidatedBody(e, bodySchema.parse);

  return { body };
});

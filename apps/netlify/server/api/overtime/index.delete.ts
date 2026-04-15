import { appendCors } from "~~/server/utils";
import { prisma } from "~~/server/prisma";
import { z } from "zod";

const bodySchema = z.object({
  id: z.string().array(),
});

export default defineEventHandler(async (e) => {
  appendCors(e);
  const { id } = await readValidatedBody(e, bodySchema.parse);

  const overtimeRecord = await prisma.overtimeRecord.deleteMany({
    where: { id: { in: id } },
  });

  return overtimeRecord;
});

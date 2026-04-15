import { prisma } from "~~/server/prisma";
import { validateJWT, appendCors } from "~~/server/utils";
import { z } from "zod";

const querySchema = z.object({
  pageIndex: z
    .string()
    .refine(
      (value) =>
        z.number().int().nonnegative().safeParse(Number.parseInt(value, 10))
          .success,
      {
        message: "pageIndex must be a non-negative integer",
      }
    )
    .transform(Number),
  pageSize: z
    .string()
    .refine(
      (value) =>
        z.number().int().positive().safeParse(Number.parseInt(value, 10))
          .success,
      {
        message: "pageSize must be a positive integer",
      }
    )
    .transform(Number),
});

export default defineEventHandler(async (e) => {
  appendCors(e);
  const user = await validateJWT(e);
  const params = await getValidatedQuery(e, querySchema.parse);
  const count = await prisma.overtimeRecord.count({
    where: {
      userId: user.id,
    },
  });
  const overtimeRecords = await prisma.overtimeRecord.findMany({
    where: {
      userId: user.id,
    },
    skip: params.pageIndex * params.pageSize,
    take: params.pageSize,
    orderBy: {
      createdAt: "desc",
    },
  });

  return { count, rows: overtimeRecords };
});

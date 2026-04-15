import { validateJWT, appendCors } from "~~/server/utils";
import { prisma } from "~~/server/prisma";
import { z } from "zod";

const bodyItemSchama = z.object({
  id: z.string().optional(),
  date: z
    .string()
    .datetime()
    .default(() => new Date().toISOString()),
  hours: z.number().int().min(0).max(24).default(8),
  reason: z.string().optional(),
  redeemed: z.boolean().optional(),
});

const bodySchema = z.object({
  rows: bodyItemSchama.array(),
});

export default defineEventHandler(async (e) => {
  appendCors(e);
  const currentUser = await validateJWT(e);
  const { rows } = await readValidatedBody(e, bodySchema.parse);
  const ids = rows.map((row) => row.id).filter((id): id is string => !!id);
  const [{ date, hours, reason, redeemed, id }] = rows;

  if (!id) {
    await prisma.overtimeRecord.create({
      data: {
        date,
        hours,
        reason,
        redeemed,
        userId: currentUser.id,
      },
    });

    return {
      count: 1,
    };
  }

  /**
   * Performance optimization:
   * avoid updating the same record multiple times in a single request.
   * get data from the first row and update all records with the same id.
   * This is because the speed of updating multiple records is much faster than updating them one by one.
   * This is a trade-off between performance and data integrity.
   */
  const result = await prisma.overtimeRecord.updateMany({
    where: { id: { in: ids }, userId: currentUser.id },
    data: {
      date,
      hours,
      reason,
      redeemed,
    },
  });

  return {
    count: result.count,
  };
});

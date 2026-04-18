import { OvertimeRecordModel } from "db";
import { z } from "zod";
import { appendCors } from "~~/server/utils";

const bodyItemSchama = z.object({
  id: z.string().optional(),
  date: z.iso.datetime().default(() => new Date().toISOString()),
  hours: z.number().int().min(0).max(24).default(8),
  reason: z.string().optional(),
  redeemed: z.boolean().optional(),
});

const bodySchema = z.object({
  rows: bodyItemSchama.array(),
});

export default defineEventHandler(async (e) => {
  appendCors(e);
  const { rows } = await readValidatedBody(e, bodySchema.parse);

  await Promise.all(
    rows.map(async (row) => {
      const doc = new OvertimeRecordModel({
        user: "test-user",
        date: new Date(row.date),
        hours: row.hours,
        reason: row.reason,
        redeemed: row.redeemed,
      });
      await doc.save();
    }),
  );

  return { rows };
});

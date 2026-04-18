import { OvertimeRecordModel } from "db";
import { z } from "zod";
import { appendCors } from "~~/server/utils";

const querySchema = z.object({
  pageIndex: z
    .string()
    .refine(
      (value) =>
        z.number().int().nonnegative().safeParse(Number.parseInt(value, 10))
          .success,
      {
        message: "pageIndex must be a non-negative integer",
      },
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
      },
    )
    .transform(Number),
});

export default defineEventHandler(async (e) => {
  appendCors(e);
  const params = await getValidatedQuery(e, querySchema.parse);
  const rows = await OvertimeRecordModel.find()
    .skip(params.pageIndex * params.pageSize)
    .limit(params.pageSize);
  const count = await OvertimeRecordModel.countDocuments();

  return { rows, count };
});

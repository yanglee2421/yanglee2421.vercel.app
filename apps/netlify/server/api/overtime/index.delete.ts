import { OvertimeRecordModel } from "db";
import { z } from "zod";
import { appendCors } from "~~/server/utils";

const bodySchema = z.object({
  id: z.string().array(),
});

export default defineEventHandler(async (e) => {
  appendCors(e);
  const body = await readValidatedBody(e, bodySchema.parse);
  const { id } = body;

  const result = await OvertimeRecordModel.deleteMany({
    _id: { $in: id },
  });

  return { body, result };
});

import jwt from "jsonwebtoken";
import { prisma } from "~~/server/prisma";
import { z } from "zod";
import { JWT_KEY } from "~~/server/constants";
import { appendCors } from "~~/server/utils";

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(16),
});

export default defineEventHandler(async (e) => {
  appendCors(e);
  const { email, password } = await readValidatedBody(e, bodySchema.parse);
  const user = await prisma.user.create({
    data: {
      email,
      password,
    },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });

  const token = jwt.sign(user.id, JWT_KEY);

  return {
    token,
    user,
  };
});

import jwt from "jsonwebtoken";
import { prisma } from "~~/server/prisma";
import { z } from "zod";
import { JWT_KEY } from "~~/server/constants";
import { appendCors } from "~~/server/utils";
import { createError, defineEventHandler, readValidatedBody } from "#imports";

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(16),
});

export default defineEventHandler(async (e) => {
  appendCors(e);
  const { email, password } = await readValidatedBody(e, bodySchema.parse);
  const user = await prisma.user.findFirst({
    where: {
      email,
      password,
    },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });

  if (!user) {
    throw createError({
      status: 401,
      statusMessage: "Unauthorized",
      message: "Invalid email or password",
    });
  }

  const token = jwt.sign(user.id, JWT_KEY);

  return {
    token,
    user,
  };
});

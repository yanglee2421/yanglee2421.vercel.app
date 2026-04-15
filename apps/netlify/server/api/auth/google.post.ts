import { prisma } from "~~/server/prisma";
import { z } from "zod";
import { readValidatedBody } from "#imports";
import jwt from "jsonwebtoken";
import { JWT_KEY } from "~~/server/constants";

const bodySchema = z.object({
  googleId: z.string().min(1).max(100),
  email: z.string().email(),
});

export default defineEventHandler(async (e) => {
  const body = await readValidatedBody(e, bodySchema.parse);

  let googleUser = await prisma.googleUser.findUnique({
    where: { uid: body.googleId },
    include: { user: true },
  });

  if (!googleUser) {
    googleUser = await prisma.googleUser.create({
      data: {
        uid: body.googleId,
        user: {
          create: {
            email: body.email,
          },
        },
      },
      include: { user: true },
    });
  }

  const user = googleUser.user;
  const token = jwt.sign(user.id, JWT_KEY);

  return {
    token,
    user,
  };
});

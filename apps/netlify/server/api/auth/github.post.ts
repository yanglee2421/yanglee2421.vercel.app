import { prisma } from "~~/server/prisma";
import { z } from "zod";
import { readValidatedBody } from "#imports";
import jwt from "jsonwebtoken";
import { JWT_KEY } from "~~/server/constants";

const bodySchema = z.object({
  githubId: z.string().min(1).max(100),
  email: z.string().email(),
});

export default defineEventHandler(async (e) => {
  const body = await readValidatedBody(e, bodySchema.parse);

  let githubUser = await prisma.githubUser.findUnique({
    where: { uid: body.githubId },
    include: { user: true },
  });

  if (!githubUser) {
    githubUser = await prisma.githubUser.create({
      data: {
        uid: body.githubId,
        user: {
          create: {
            email: body.email,
          },
        },
      },
      include: { user: true },
    });
  }

  const user = githubUser.user;
  const token = jwt.sign(user.id, JWT_KEY);

  return {
    token,
    user,
  };
});

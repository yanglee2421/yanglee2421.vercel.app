import { prisma } from "~~/server/prisma";
import { z } from "zod";
import { readValidatedBody } from "#imports";
import jwt from "jsonwebtoken";
import { JWT_KEY } from "~~/server/constants";
import { appendCors } from "~~/server/utils";

const bodySchema = z.object({
  firebaseId: z.string(),
  name: z.string().optional(),
});

export default defineEventHandler(async (e) => {
  appendCors(e);
  const body = await readValidatedBody(e, bodySchema.parse);

  let firebaseUser = await prisma.firebaseUser.findUnique({
    where: { uid: body.firebaseId },
    include: { user: true },
  });

  if (!firebaseUser) {
    firebaseUser = await prisma.firebaseUser.create({
      data: {
        uid: body.firebaseId,
        user: {
          create: {
            name: body.name,
          },
        },
      },
      include: { user: true },
    });
  }

  const user = firebaseUser.user;
  const token = jwt.sign(user.id, JWT_KEY);

  return {
    token,
    user,
  };
});

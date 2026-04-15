import { validateJWT, appendCors } from "~~/server/utils";
import { prisma } from "~~/server/prisma";
import { z } from "zod";

const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(16).optional(),
  name: z.string().min(3).max(50).optional(),
  googleId: z.string().optional(),
});

export default defineEventHandler(async (e) => {
  appendCors(e);
  const currentUser = await validateJWT(e);
  const { email, password, name } = await readValidatedBody(
    e,
    bodySchema.parse
  );

  const user = await prisma.user.upsert({
    where: {
      id: currentUser.id,
      email,
      password,
    },
    create: {
      email,
      password: email,
      name,
    },
    update: {
      password,
      name,
    },
  });

  return user;
});

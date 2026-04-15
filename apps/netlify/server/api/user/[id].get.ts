import { prisma } from "~~/server/prisma";
import { validateJWT, appendCors } from "~~/server/utils";

export default defineEventHandler(async (e) => {
  appendCors(e);
  await validateJWT(e);

  const user = await prisma.user.findUnique({
    where: {
      id: getRouterParam(e, "id", { decode: true }),
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  if (!user) {
    throw createError({
      status: 404,
      message: "User not found",
    });
  }

  return user;
});

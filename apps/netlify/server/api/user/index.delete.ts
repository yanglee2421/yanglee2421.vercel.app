import { validateJWT, appendCors } from "~~/server/utils";
import { prisma } from "~~/server/prisma";

export default defineEventHandler(async (e) => {
  appendCors(e);
  const currentUser = await validateJWT(e);

  const user = await prisma.user.delete({
    where: { id: currentUser.id },
  });

  return user;
});

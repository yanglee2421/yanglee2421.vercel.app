import { prisma } from "~~/server/prisma";
import { z } from "zod";
import { validateJWT, appendCors } from "~~/server/utils";

const querySchema = z.object({
  email: z.string().optional(),
  name: z.string().optional(),
  pageIndex: z
    .string()
    .refine(
      (value) =>
        z.number().int().nonnegative().safeParse(Number.parseInt(value, 10))
          .success,
      {
        message: "pageIndex must be a non-negative integer",
      }
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
      }
    )
    .transform(Number),
});

export default defineEventHandler(async (e) => {
  appendCors(e);
  await validateJWT(e);

  const {
    email,
    name,
    pageIndex = 0,
    pageSize = 20,
  } = await getValidatedQuery(e, querySchema.parse);
  const users = await prisma.user.findMany({
    where: {
      email: { contains: email, mode: "insensitive" },
      name: { contains: name, mode: "insensitive" },
    },
    skip: pageIndex * pageSize,
    take: pageSize,
    select: {
      address: false,
      posts: false,
      name: true,
      email: true,
      id: true,
    },
  });

  const count = await prisma.user.count({
    where: {
      email: { contains: email, mode: "insensitive" },
      name: { contains: name, mode: "insensitive" },
    },
  });

  return { users, count };
});

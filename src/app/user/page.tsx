import { prisma } from "@src/db/db";
import { revalidatePath } from "next/cache";

export default async function Page() {
  const users = await prisma.user.findMany();
  return (
    <>
      <ul>
        {users.map((i) => (
          <li key={i.id}>
            <a href={`/user/${i.id}`}>
              {i.email}
            </a>
          </li>
        ))}
      </ul>
      <form
        action={async (fd) => {
          "use server";
          const email = fd.get("email");
          if (typeof email !== "string") throw new Error("type error");
          await prisma.user.create({ data: { email } });
          revalidatePath("/");
        }}
      >
        <div>
          <input type="email" name="email" id="" />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
}

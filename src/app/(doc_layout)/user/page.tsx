import { prisma } from "@src/db/db";
import { revalidatePath } from "next/cache";

export default async function Page() {
  const users = await prisma.user.findMany();
  return (
    <div className="space-y-6 p-3">
      <ul className="divide-y rounded border">
        {users.map((i) => (
          <li
            key={i.id}
            className="flex items-center justify-between px-5 py-2"
          >
            <div>
              <p>
                <a href={`/user/${i.id}`}>{i.email}</a>
              </p>
              <p>{i.name}</p>
            </div>

            <form
              action={async () => {
                "use server";
                await prisma.user.delete({ where: { id: i.id } });
                revalidatePath("/", "layout");
              }}
            >
              <button type="submit" className="uppercase text-red-500">
                delete
              </button>
            </form>
          </li>
        ))}
      </ul>
      <form
        action={async (fd) => {
          "use server";
          const email = fd.get("email");
          if (typeof email !== "string") throw new Error("type error");
          await prisma.user.create({ data: { email } });
          revalidatePath("/", "layout");
        }}
        className="space-y-6"
      >
        <div>
          <input type="email" name="email" id="" />
        </div>
        <div>
          <button
            type="submit"
            className="rounded bg-indigo-500 px-4 py-2 uppercase text-white outline-offset-2 hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-300 active:bg-indigo-700"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

import { prisma } from "@src/db/db";
import { revalidatePath } from "next/cache";

export default async function Page() {
  const users = await prisma.user.findMany();
  return (
    <div className="p-3 space-y-6">
      <ul className="border divide-y rounded">
        {users.map((i) => (
          <li
            key={i.id}
            className=" flex justify-between items-center px-5 py-2"
          >
            <div>
              <p>
                <a href={`/user/${i.id}`}>
                  {i.email}
                </a>
              </p>
              <p>{i.name}</p>
            </div>

            <form
              action={async () => {
                "use server";
                await prisma.user.delete({ where: { id: i.id } });
                revalidatePath("/");
              }}
            >
              <button type="submit" className=" uppercase text-red-500">
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
          revalidatePath("/");
        }}
        className=" space-y-6"
      >
        <div>
          <input type="email" name="email" id="" />
        </div>
        <div>
          <button
            type="submit"
            className=" bg-indigo-500 px-4 py-2 rounded outline outline-indigo-300 outline-offset-4 uppercase hover:bg-indigo-600 active:bg-indigo-700"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

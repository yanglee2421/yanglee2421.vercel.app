import { prisma } from "@src/db/db";
import { revalidatePath } from "next/cache";

type Props = {
  params: { id: string };
};

export default async function Page(props: Props) {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: props.params.id },
  });

  return (
    <div>
      <code>{JSON.stringify(user, null, 2)}</code>
      <form
        action={async (fd) => {
          "use server";

          const name = fd.get("name");

          if (typeof name !== "string") throw new Error("type error");

          const { id, ...restUser } = user;
          void id;

          await prisma.user.update({
            where: {
              id: props.params.id,
            },
            data: { ...restUser, name },
          });

          revalidatePath("/");
        }}
      >
        <div>
          <input
            type="text"
            name="name"
            defaultValue={user.name || ""}
            className=" text-black"
          />
        </div>
        <div>
          <button type="submit">save</button>
        </div>
      </form>
    </div>
  );
}

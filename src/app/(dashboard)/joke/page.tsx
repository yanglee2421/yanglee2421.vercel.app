import { joke } from "@/api/qqlykm/joke";
import { revalidatePath } from "next/cache";
import { FormSubmit } from "./FormSubmit";

export default async function Page() {
  const res = await joke({});

  return (
    <div>
      <p>{res.data.data.joke}</p>
      <form
        action={async () => {
          "use server";
          revalidatePath("/");
        }}
      >
        <FormSubmit />
      </form>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
import Image from "next/image";
import { revalidatePath } from "next/cache";

const modeAction = async () => {
  "use server";

  const cookie = await cookies();
  const mode = cookie.get("mode");
  mode ? cookie.delete("mode") : cookie.set("mode", "1");
  revalidatePath("/");
};

export default async function Home() {
  const cookie = await cookies();
  const mode = cookie.get("mode");

  return (
    <>
      <div>
        <header className="fixed z-10 flex h-16 w-full items-center justify-start border-b border-slate-300 p-4 backdrop-blur-xs">
          <h2 className="text-2xl">App Name</h2>
          <div className="ms-auto"></div>
          <form action={modeAction} className="sm:hidden">
            <button type="submit" className="cursor-pointer">
              menu
            </button>
          </form>
        </header>
        <aside
          className="fixed top-0 left-0 h-dvh w-full pt-16 data-[mode=true]:hidden sm:max-w-64 sm:data-mode:flex!"
          data-mode={!!mode?.value}
        >
          <nav className="size-full overflow-auto border-r border-slate-300">
            <ul className=" ">
              {Array.from({ length: 30 }, (_, index) => (
                <li key={index} className="border-b border-slate-300 p-3">
                  {index}
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className="flex min-h-dvh flex-col border pt-16 sm:ps-64">
          <main className="shrink-0 grow p-6">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
            <Button>Click me</Button>
          </main>
          <footer className="p-6">&copy;2025 created by Lee</footer>
        </div>
      </div>
    </>
  );
}

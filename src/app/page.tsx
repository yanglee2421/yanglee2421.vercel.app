import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <header className="fixed flex h-16 w-full items-center justify-start border-b border-slate-300 p-4 backdrop-blur-xs">
          <h2 className="text-2xl">App Name</h2>
          <div className="ms-auto"></div>
          <button className="cursor-pointer">menu</button>
        </header>
        <aside className="fixed top-0 left-0 h-dvh w-64 pt-16">
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
        <div className="flex min-h-dvh flex-col border ps-64 pt-16">
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

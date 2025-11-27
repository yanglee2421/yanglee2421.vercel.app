import Image from "next/image";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { Button } from "@/components/ui/button";
import { FXPLCClient, TransportSerial } from "node-fxplc";

const modeAction = async () => {
  "use server";

  const cookie = await cookies();
  const mode = cookie.get("mode");

  if (mode) {
    cookie.delete("mode");
  } else {
    cookie.set("mode", "1");
  }

  revalidatePath("/");
};

const darkAction = async () => {
  "use server";

  const cookie = await cookies();
  const dark = cookie.get("dark");

  if (dark) {
    cookie.delete("dark");
  } else {
    cookie.set("dark", "1");
  }

  revalidatePath("/");
};

const rs232Action = async () => {
  "use server";

  const transport = new TransportSerial({
    path: "COM3",
    baudRate: 9600,
    timeout: 1500,
  });
  const plc = new FXPLCClient(transport, { debug: true });
  const bit = await plc.readBit("M0");
  console.log("M0 =", bit);
  plc.close();

  const body = Buffer.concat([
    Buffer.from("0", "ascii"),
    Buffer.from("10F6", "ascii"),
    Buffer.from("04", "ascii"),
    Buffer.from([0x03]),
  ]);

  const list = [...body];
  const sum = list.reduce((result, item) => result + item, 0);
  const checkSumString = sum.toString(16).slice(-2);

  console.log(
    Buffer.concat([
      Buffer.from([0x02]),
      body,
      Buffer.from(checkSumString, "ascii"),
    ]),
  );
};

const makeYAddress = () => {
  return 0x100 + Number.parseInt("0x23", 16) / 8;
};

const yAddress = makeYAddress();

console.log("yaddress", Buffer.from([yAddress]));

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
          <form action={darkAction}>
            <button type="submit" className="cursor-pointer">
              dark
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
            <form action={rs232Action}>
              <Button type="submit">Click me</Button>
            </form>
          </main>
          <footer className="p-6">&copy;2025 created by Lee</footer>
        </div>
      </div>
    </>
  );
}

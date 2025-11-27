import Image from "next/image";
import { SerialPort } from "serialport";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { Button } from "@/components/ui/button";

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

const modbusAction = async () => {
  "use server";

  const serialport = new SerialPort({
    path: "COM1",
    baudRate: 9600,
    dataBits: 7,
    stopBits: 1,
    parity: "even",
  });

  // MC Protocol (Mitsubishi) 指令构建：设置 Y37 为 ON
  // 使用二进制 MC 协议 (Binary MC Protocol)
  // 帧格式: 副报头(2) + PC号(1) + IO号(2) + 扩展(2) + 数据长度(2) + CPU监视定时器(2) + 命令(2) + 子命令(2) + 设备代码(2) + 起始地址(4) + 点数(2) + 数据 + CRC(2)

  // Y37 设备设置指令：设置输出 Y37 为 ON (1)
  // Y37 对应地址: 0x01250 (Hex) 或 4688 (Dec) - 100进制: 37
  const buffer = Buffer.from([
    0x50,
    0x00, // 副报头 (Subheader)
    0xff, // PC号
    0x03,
    0x00, // IO号
    0x00,
    0x00, // 扩展
    0x0c,
    0x00, // 数据长度 (12 bytes)
    0x00,
    0x00, // CPU监视定时器
    0x14,
    0x01, // 命令 (0x0114 - Write Devices)
    0x00,
    0x00, // 子命令
    0x59, // 设备代码 (0x59 = Y 输出)
    0x25,
    0x00,
    0x00,
    0x00, // 起始地址 (Y37 = 0x00000025 in decimal 37)
    0x01,
    0x00, // 点数 (1个点)
    0x01, // 数据 (1 = ON)
    0x00,
    0x00, // CRC16 (简化为0，实际应计算)
  ]);

  serialport.write(buffer);

  serialport.close();
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
            <form action={modbusAction}>
              <Button type="submit">Click me</Button>
            </form>
          </main>
          <footer className="p-6">&copy;2025 created by Lee</footer>
        </div>
      </div>
    </>
  );
}

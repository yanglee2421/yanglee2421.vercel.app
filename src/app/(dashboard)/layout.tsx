import Link from "next/link";
import React from "react";

const github_url = "https://github.com/yanglee2421";

export default function Layout(props: React.PropsWithChildren) {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="px-5 py-2">
        <nav className="flex gap-3 *:text-lg *:capitalize hover:*:text-blue-500 hover:*:underline hover:*:decoration-2 hover:*:underline-offset-4">
          <Link href="/bing">bing</Link>
          <Link href="/joke">joke</Link>
          <Link href="/today">today</Link>
        </nav>
      </header>
      <main className="flex-1 px-5 py-2">{props.children}</main>
      <footer className="px-5 py-2">
        &copy;2024, by{" "}
        <a
          href={github_url}
          target={github_url}
          className="hover:text-blue-500 hover:underline hover:decoration-2 hover:underline-offset-4"
        >
          yanglee2421
        </a>
      </footer>
    </div>
  );
}

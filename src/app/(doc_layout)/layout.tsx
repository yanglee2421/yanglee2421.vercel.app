import classNames from "classnames";
import Link from "next/link";
import React from "react";

export default function Layout(props: React.PropsWithChildren) {
  return (
    <div>
      <header className={classNames("fixed h-16 w-full border px-5 py-2")}>
        header
      </header>
      <aside className="fixed h-dvh w-72 pt-16">
        <div className="h-full overflow-auto border">
          <div className=""></div>
          <nav>
            <ul className="divide-y *:px-5 *:py-2">
              <li className="">
                <Link href="/">home</Link>
              </li>
              <li className="">
                <Link
                  href="/user"
                  className="text-base hover:text-indigo-500 hover:underline"
                >
                  user
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <div className="flex min-h-dvh flex-col ps-72 pt-16">
        <main className="flex-grow">
          <div className="border">{props.children}</div>
        </main>
        <footer>
          <div className="border px-5 py-2">
            &copy;2024 by{" "}
            <a
              href="https://github.com/yanglee2421"
              className="text-indigo-500 underline underline-offset-2"
            >
              yanglee2421
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

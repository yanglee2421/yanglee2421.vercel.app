import classNames from "classnames";
import Link from "next/link";
import React from "react";

export default function Layout(props: React.PropsWithChildren) {
  const showNav = false;

  return (
    <div>
      <header
        className={classNames("fixed h-16 w-full border px-5 py-2 shadow")}
      >
        header
      </header>
      <aside
        className={classNames(
          "fixed h-dvh w-full pt-16 sm:max-w-72",
          !showNav && "max-w-0",
        )}
      >
        <div className="h-full overflow-auto border">
          <div className=""></div>
          <nav>
            <ul className="divide-y *:px-5 *:py-2">
              <li className="">
                <Link
                  href="/"
                  className="text-base hover:text-indigo-500 hover:underline"
                >
                  home
                </Link>
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
      <div
        className={classNames(
          "min-h-dvh flex-col pt-16 sm:flex sm:ps-72",
          showNav ? "hidden" : "flex",
        )}
      >
        <main className="flex-grow">
          <div className="p-5">{props.children}</div>
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

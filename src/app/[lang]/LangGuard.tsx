"use client";
import { LANGUAGES } from "@/shared/constant";
import { calculateLocale, calculateLocalePathname } from "@yotulee/run";
import { redirect, usePathname } from "next/navigation";

type LangGuardProps = React.PropsWithChildren<{
  cookieLang: string;
}>;

export const LangGuard = (props: LangGuardProps) => {
  const pathname = usePathname();

  const locales = LANGUAGES.slice();
  const locale = calculateLocale(props.cookieLang, locales);
  const localePathname = calculateLocalePathname(pathname, locale, locales);

  if (localePathname !== pathname) {
    redirect(localePathname);
  }

  return props.children;
};

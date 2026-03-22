"use client";
import { LocaleContext } from "@/shared/LocaleContext";
import { redirect, usePathname } from "next/navigation";
import React from "react";

type LangGuardProps = React.PropsWithChildren<{
  locale: string;
}>;

export const LangGuard = (props: LangGuardProps) => {
  const localeService = React.use(LocaleContext);

  const pathname = usePathname();
  const localePathname = localeService.resolvePathname(pathname);

  localeService.setLocale(props.locale);

  if (localePathname !== pathname) {
    redirect(localePathname);
  }

  return props.children;
};

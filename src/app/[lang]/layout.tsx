import { LANGUAGES } from "@/shared/constant";
import { calculateLocale, calculateLocalePathname } from "@yotulee/run";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

type Props = React.PropsWithChildren & PageProps<"/[lang]">;

export default async function LangLayout(props: Props) {
  const { lang } = await props.params;
  const cookieStore = await cookies();
  const currentLang = cookieStore.get("lang")?.value || LANGUAGES[0];
  const locale = calculateLocale(currentLang, [...LANGUAGES]);
  const pathname = `/${lang}`;
  const resultPathname = calculateLocalePathname(pathname, locale, [
    ...LANGUAGES,
  ]);

  if (resultPathname !== pathname) {
    redirect(resultPathname);
  }

  return props.children;
}

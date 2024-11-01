import React from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

type Props = React.PropsWithChildren<{
  lang: string;
}>;

const langs = new Set<string>();
langs.add("en");
langs.add("zh");

export async function TranslateWrapper(props: Props) {
  const cookie = await cookies();
  const cookieLang = cookie.get("lang");
  const fallbackLang = "en";

  if (langs.has(props.lang)) {
    return props.children;
  }

  if (langs.has(cookieLang?.value || "")) {
    return redirect(`/${cookieLang}`);
  }

  return redirect(`/${fallbackLang}`);
}

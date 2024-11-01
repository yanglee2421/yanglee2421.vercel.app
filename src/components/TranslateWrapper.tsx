"use client";

import React from "react";
import { redirect } from "next/navigation";

type Props = React.PropsWithChildren<{
  lang: string;
}>;

const langs = new Set(["en", "zh"]);

export async function TranslateWrapper(props: Props) {
  const fallbackLang = "en";

  if (langs.has(props.lang)) {
    return props.children;
  }

  return redirect(`/${fallbackLang}`);
}

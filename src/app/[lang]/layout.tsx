import { LANGUAGES } from "@/shared/constant";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

type Props = React.PropsWithChildren & PageProps<"/[lang]">;

export default async function LangLayout(props: Props) {
  const { lang } = await props.params;
  const cookieStore = await cookies();
  const currentLang = cookieStore.get("lang")?.value || "en";

  if (LANGUAGES.includes(lang)) {
    return props.children;
  }

  if (LANGUAGES.includes(currentLang)) {
    redirect(`/${currentLang}/${lang}`);
  }

  redirect(`/${"en"}/${lang}`);
}

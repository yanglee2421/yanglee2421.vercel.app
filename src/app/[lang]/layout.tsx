import { LANGUAGES } from "@/shared/constant";
import { cookies } from "next/headers";
import React from "react";
import { LangGuard } from "./LangGuard";

type Props = React.PropsWithChildren & PageProps<"/[lang]">;

export default async function LangLayout(props: Props) {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("lang")?.value || LANGUAGES[0];

  return <LangGuard cookieLang={cookieLang}>{props.children}</LangGuard>;
}

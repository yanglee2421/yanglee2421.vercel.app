import { localeService } from "@/shared/services/locale";
import { cookies } from "next/headers";
import React from "react";
import { LangGuard } from "./LangGuard";

type Props = React.PropsWithChildren & PageProps<"/[lang]">;

export default async function LangLayout(props: Props) {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("lang")?.value || "";
  localeService.setLocale(cookieLang);
  const locale = localeService.getLocale();

  return <LangGuard locale={locale}>{props.children}</LangGuard>;
}

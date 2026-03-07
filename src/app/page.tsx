import { LANGUAGES, LANG_COOKIE_NAME } from "@/shared/constant";
import { calculateLocale } from "@yotulee/run";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const cookieStore = await cookies();
  const lang = cookieStore.get(LANG_COOKIE_NAME)?.value || LANGUAGES[0];
  const locale = calculateLocale(lang, [...LANGUAGES]);

  redirect(`/${locale}`);
}

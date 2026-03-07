import { FALLBACK_LANG, LANG_COOKIE_NAME } from "@/shared/constant";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const cookieStore = await cookies();
  const lang = cookieStore.get(LANG_COOKIE_NAME)?.value || FALLBACK_LANG;

  redirect(`/${lang}`);
}

import { LANG_COOKIE_NAME } from "@/shared/constant";
import { localeService } from "@/shared/services/locale";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const cookieStore = await cookies();
  const lang = cookieStore.get(LANG_COOKIE_NAME)?.value || "";
  localeService.setLocale(lang);
  const locale = localeService.getLocale();

  redirect(`/${locale}`);
}

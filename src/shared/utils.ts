export const calculateLocale = (
  fallbackLocale: string,
  localeSegment: string,
) => {
  if (LOCALES.has(localeSegment)) {
    return localeSegment;
  }

  if (LOCALES.has(fallbackLocale)) {
    return fallbackLocale;
  }

  return DEFAULT_LANG;
};

export const normalizePathname = (pathname: string) => {
  let result = pathname;
  const isStartWithSlash = pathname.startsWith("/");
  const isEndWithSlash = pathname.endsWith("/");

  if (!isStartWithSlash) {
    result = "/" + result;
  }

  if (isEndWithSlash) {
    result = result.replace(/\/$/, "");
  }

  return result;
};

export const calculateLocalePathname = (pathname: string, locale: string) => {
  const segments = normalizePathname(pathname).split("/");
  const localeSegment = segments.at(1) || "";

  console.log(segments);

  if (locale === localeSegment) {
    return pathname;
  }

  /**
   * Locale segment already exists
   * just replace it
   */
  if (LOCALES.has(localeSegment)) {
    return segments.with(1, locale).join("/");
  }

  /**
   * Locale segment does not exist
   * add it
   */
  return ["", ...segments].with(1, locale).join("/");
};

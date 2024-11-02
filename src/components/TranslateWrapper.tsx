"use client";

import React from "react";
import { redirect, usePathname } from "next/navigation";
import { useLangStore } from "@/hooks/useLangStore";

type Props = React.PropsWithChildren<{
  lang: string;
  fallback?: React.ReactNode;
}>;

const langs = new Set(["en", "zh"]);
const getLang = (path: string, store: string) => {
  const fallback = langs.has(store) ? store : "en";

  if (!path) {
    return fallback;
  }

  if (!langs.has(path)) {
    return fallback;
  }

  return path;
};

export function TranslateWrapper(props: Props) {
  const pathname = usePathname();
  const storeLang = useLangStore((s) => s.lang);
  const setStoreLang = useLangStore((s) => s.set);
  const hasHydrated = React.useSyncExternalStore(
    (onStateChange) => useLangStore.persist.onFinishHydration(onStateChange),
    () => useLangStore.persist.hasHydrated(),
    () => false,
  );

  React.useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    const lang = getLang(props.lang, storeLang);

    if (lang === storeLang) {
      return;
    }

    setStoreLang({ lang });
  }, [setStoreLang, props.lang, storeLang, hasHydrated]);

  if (!hasHydrated) {
    return props.fallback;
  }

  const lang = getLang(props.lang, storeLang);

  if (props.lang !== lang) {
    return redirect(`/${lang + pathname}`);
  }

  return props.children;
}

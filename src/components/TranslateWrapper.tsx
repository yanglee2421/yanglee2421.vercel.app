"use client";

import React from "react";
import { redirect, usePathname } from "next/navigation";
import { useLangStore } from "@/hooks/useLangStore";

type Props = React.PropsWithChildren<{
  lang: string;
  fallback?: React.ReactNode;
}>;

const langs = new Set(["en", "zh"]);
const getMatchedLang = (path: string, store: string) => {
  if (langs.has(path)) {
    return path;
  }

  if (langs.has(store)) {
    return store;
  }

  return "en";
};

export function TranslateWrapper(props: Props) {
  const hasHydrated = React.useSyncExternalStore(
    (onStoreChange) => useLangStore.persist.onFinishHydration(onStoreChange),
    () => useLangStore.persist.hasHydrated(),
    () => false,
  );

  if (!hasHydrated) {
    return props.fallback;
  }

  return <Outlet lang={props.lang}>{props.children}</Outlet>;
}

function Outlet(props: Props) {
  const pathname = usePathname();
  const storeLang = useLangStore((s) => s.lang);
  const setStoreLang = useLangStore((s) => s.set);
  const matchedLang = getMatchedLang(props.lang, storeLang);

  React.useEffect(() => {
    if (matchedLang === storeLang) {
      return;
    }

    setStoreLang({ lang: matchedLang });
  }, [setStoreLang, matchedLang, storeLang]);

  if (props.lang !== matchedLang) {
    return redirect(`/${matchedLang + pathname}`);
  }

  return props.children;
}

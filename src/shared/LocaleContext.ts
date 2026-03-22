import React from "react";
import { localeService } from "./services/locale";

export const LocaleContext = React.createContext(localeService);

export const useLocale = () => {
  const localeService = React.use(LocaleContext);

  const locale = React.useSyncExternalStore(
    localeService.on.bind(localeService),
    localeService.getLocale.bind(localeService),
  );

  return locale;
};

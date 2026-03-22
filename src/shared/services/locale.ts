import { LocaleService } from "@yotulee/run";
import { LANGUAGES } from "../constant";

export const localeService = new LocaleService(LANGUAGES.slice(0));

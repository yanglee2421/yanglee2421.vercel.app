import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type LangStore = {
  lang: string;
  set: {
    (
      partial:
        | LangStore
        | Partial<LangStore>
        | ((state: LangStore) => LangStore | Partial<LangStore>),
      replace?: false,
    ): void;
    (state: LangStore | ((state: LangStore) => LangStore), replace: true): void;
  };
};

export const useLangStore = create(persist<LangStore>(
  (set) => ({
    set,
    lang: "en",
  }),
  {
    name: "useLangStore",
    storage: createJSONStorage(() => globalThis.localStorage),
  },
));

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { type WritableDraft } from "immer";

type LangStoreState = {
  lang: string;
};

type LangStoreActions = {
  set(
    nextStateOrUpdater:
      | LangStoreState
      | Partial<LangStoreState>
      | ((state: WritableDraft<LangStoreState>) => void),
  ): void;
};

type LangStore = LangStoreState & LangStoreActions;

export const useLangStore = create<LangStore>()(persist(
  immer((set) => ({
    set,
    lang: "en",
  })),
  {
    name: "useLangStore",
    storage: createJSONStorage(() => globalThis.localStorage),
  },
));

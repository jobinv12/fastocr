import { create } from "zustand";

interface LanguageState {
  langCode: string;
  updateLanguage: (text: string) => void;

}

export const useLanguageStore = create<LanguageState>((set) => ({
  langCode: "",
  updateLanguage: (text) => set((state) => ({ langCode: text })),

}));
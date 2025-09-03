import { create } from "zustand";

interface ExtractState {
  value: string;
  addText: (text: string) => void;
  setText: (text: string) => void;
  clearText: () => void;
}

export const useExtractStore = create<ExtractState>((set) => ({
  value: "",
  addText: (text) => set((state) => ({ value: state.value + text })),
  setText: (text) => set({ value: text }),
  clearText: () => set({ value: "" }),
}));
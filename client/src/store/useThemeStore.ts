import { create } from "zustand";

type ThemeState = {
  theme: string;
  setTheme: (theme: string) => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  theme: localStorage.getItem("preferred-theme") || "dark",
  setTheme: (theme: string) => {
    localStorage.setItem("preferred-theme", theme);
    set({ theme });
  },
}));

export default useThemeStore;

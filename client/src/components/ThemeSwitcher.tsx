import { Moon, Sun } from "lucide-react";
import useThemeStore from "../store/useThemeStore";

function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore();

  return (
    <>
      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input
          type="checkbox"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />

        {/* moon icon */}
        <Moon className="swap-off size-5.5" />

        {/* sun icon */}
        <Sun className="swap-on size-5.5" />
      </label>
    </>
  );
}

export default ThemeSwitcher;

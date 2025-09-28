import { Link } from "react-router-dom";
import ThemeSwitcher from "@components/theme/ThemeSwitcher";
import HistoryDropMenu from "@components/history/HistoryDropMenu";
import ProfileDropMenu from "@components/profile/ProfileDropMenu";
import useThemeStore from "@store/useThemeStore";
import { twMerge } from "tailwind-merge";

function NavBar() {
  // const isHomePage = window.location.pathname === "/";
  const { theme } = useThemeStore();

  return (
    <header className="bg-base-100 border-base-content/10 border-b shadow-sm">
      <div className="navbar mx-auto max-w-7xl">
        {/* LOGO */}
        <Link
          to="/"
          className="flex flex-1 items-center gap-3 transition-opacity hover:opacity-80"
        >
          <img src="/dice.png" alt="Logo" className="size-7" />
          <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text font-mono text-2xl font-semibold tracking-wider text-transparent">
            Dice Roller
          </span>
        </Link>

        {/* RIGHT SIDE ICONS */}
        <section
          className={twMerge(
            "[&>*]:hover:bg-neutral flex items-center gap-3 [&>*]:rounded-full [&>*]:transition-colors",
            theme === "light" && "[&>*]:hover:bg-neutral/30",
          )}
        >
          {/* THEME SWITCHER */}
          <ThemeSwitcher />

          {/* HISTORY ICON */}
          <HistoryDropMenu />

          {/* PROFILE ICON */}
          <ProfileDropMenu />
        </section>
      </div>
    </header>
  );
}

export default NavBar;

import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import HistoryDropMenu from "./HistoryDropMenu";
import ProfileDropMenu from "./ProfileDropMenu";

function NavBar() {
  // const isHomePage = window.location.pathname === "/";

  return (
    <header className="bg-base-100 shadow-sm border-b border-base-content/10">
      <div className="navbar max-w-7xl mx-auto">
        <Link
          to="/"
          className="hover:opacity-80 transition-opacity flex-1 items-center flex gap-3"
        >
          {/* <div className="flex items-center gap-2"> */}
          <img src="/dice.png" alt="Logo" className="size-7" />
          <span className="font-semibold font-mono tracking-wider text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Dice Roller
          </span>
          {/* </div> */}
        </Link>
        <section className="flex items-center gap-3 [&>*]:rounded-full [&>*]:p-1 [&>*]:hover:bg-neutral [&>*]:transition-colors">
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

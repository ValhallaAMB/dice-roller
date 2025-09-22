import { User } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

function NavBar() {
  const isHomePage = window.location.pathname === "/";

  return (
    <header className="bg-base-100 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="navbar px-4 min-h-[4rem] justify-between">
          {/* Logo | Left side */}
          <div className="flex-1 lg:flex-none">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-2">
                <img src="/dice.png" alt="Logo" className="size-7" />
                <span className="font-semibold font-mono tracking-wider text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Dice Roller
                </span>
              </div>
            </Link>
          </div>

          {/* Settings | Right side */}
          <div className="flex items-center gap-4">
            <ThemeSwitcher />

            {isHomePage && (
              <div className="p-2 rounded-full hover:bg-base-200 transition-colors">
                <User className="size-5.5" />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;

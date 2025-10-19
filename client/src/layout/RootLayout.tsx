import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Toaster } from "react-hot-toast";
import useThemeStore from "@stores/useThemeStore";
import useResetError from "hooks/useResetError";
import useAuthSession from "hooks/useAuthSession";
function RootLayout() {
  const { theme } = useThemeStore();

  useResetError();
  useAuthSession();

  return (
    <div
      className="bg-base-200 text-base-content min-h-screen"
      data-theme={theme}
    >
      <NavBar />
      <main>
        <Outlet />
      </main>

      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default RootLayout;

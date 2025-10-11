import { Route, Routes } from "react-router-dom";
import NavBar from "./layout/NavBar";
import useThemeStore from "./stores/useThemeStore";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense, useEffect } from "react";
import SignInPage from "@pages/SignInPage";
import SignUpPage from "@pages/SignUpPage";
import ConfirmSignUpPage from "@pages/ConfirmSignUpPage";
import useAuthStore from "@stores/useAuthStore";

const HomePage = lazy(() => import("./pages/HomePage"));
const AccountPage = lazy(() => import("./pages/AccountPage"));

function App() {
  const { theme } = useThemeStore();
  const { getUserSession, user } = useAuthStore();

  useEffect(() => {
    const fetchUserSession = async () => {
      await getUserSession();
    };

    fetchUserSession();
  }, [user]);

  return (
    <div
      className="bg-base-200 text-base-content min-h-screen"
      data-theme={theme}
    >
      <NavBar />
      <Suspense
        fallback={
          <div className="grid min-h-[80dvh] place-items-center">
            <div className="loading loading-spinner size-12" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/confirm-signup" element={<ConfirmSignUpPage />} />
        </Routes>
      </Suspense>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;

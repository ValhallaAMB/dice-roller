import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import SignInPage from "@pages/SignInPage";
import SignUpPage from "@pages/SignUpPage";
import ConfirmSignUpPage from "@pages/ConfirmSignUpPage";
import RootLayout from "@layout/RootLayout";
import ForgotPassword from "@pages/ForgotPassword";
import ConfirmForgotPassword from "@pages/ConfirmForgotPassword";

const HomePage = lazy(() => import("./pages/HomePage"));
const AccountPage = lazy(() => import("./pages/AccountPage"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="grid min-h-[80dvh] place-items-center">
          <div className="loading loading-spinner size-12" />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/confirm-signup" element={<ConfirmSignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/confirm-forgot-password"
            element={<ConfirmForgotPassword />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

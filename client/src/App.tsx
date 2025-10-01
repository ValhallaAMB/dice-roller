import { Route, Routes } from "react-router-dom";
import NavBar from "./layout/NavBar";
import useThemeStore from "./stores/useThemeStore";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));

function App() {
  const { theme } = useThemeStore();
  return (
    <main
      className="bg-base-200 text-base-content min-h-screen"
      data-theme={theme}
    >
      <NavBar />

      <Suspense
        fallback={<div className="grid place-items-center min-h-[80dvh]">
          <div className="loading loading-spinner size-12" />
        </div>}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </Suspense>

      <Toaster position="bottom-right" reverseOrder={false} />
    </main>
  );
}

export default App;

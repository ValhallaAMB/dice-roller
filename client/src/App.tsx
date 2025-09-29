import { Route, Routes } from "react-router-dom";
import NavBar from "./layout/NavBar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import useThemeStore from "./stores/useThemeStore";
import { Toaster } from "react-hot-toast";

function App() {
  const { theme } = useThemeStore();
  return (
    <main
      className="bg-base-200 text-base-content min-h-screen"
      data-theme={theme}
    >
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>

      <Toaster position="bottom-right" reverseOrder={false} />
    </main>
  );
}

export default App;

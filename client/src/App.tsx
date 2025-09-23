import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import useThemeStore from "./store/useThemeStore";

function App() {
  const { theme } = useThemeStore();
  return (
    <main
      className="min-h-screen bg-base-200 text-base-content"
      data-theme={theme}
    >
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </main>
  );
}

export default App;

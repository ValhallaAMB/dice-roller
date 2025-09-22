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

      {/* <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="dice.png" className="h-8" alt="Dice Roller Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Dice Roller
            </span>
          </a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button className="group relative flex bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
              <img
                className="w-8 h-8 rounded-full"
                src="https://i.pravatar.cc/300"
                alt="user photo"
              /> */}

      {/* Dropdown menu */}
      {/* <div className="bg-gray-100 absolute top-full right-0 rounded-lg p-3 mt-1 shadow-md scale-y-0  group-focus:scale-y-100 origin-top duration-200">
                <ul className="text-left">
                  <li>username</li>
                  <li>example@email.com</li>
                  <li>
                    <hr className="border-gray-400 my-1" />
                  </li>
                  <li>Profile</li>
                  <li>Logout</li>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </nav> */}
    </main>
  );
}

export default App;

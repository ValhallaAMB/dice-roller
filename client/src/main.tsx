import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Must wrap the entire app in BrowserRouter to use React Router */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

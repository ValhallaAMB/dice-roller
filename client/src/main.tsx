import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Amplify } from "aws-amplify";
import amplifyConfig from "./amplifyConfig.ts";

Amplify.configure(amplifyConfig);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Must wrap the entire app in BrowserRouter to use React Router */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/outfit";
import "@fontsource/outfit/700.css";
import "./index.css";
import App from "./App.jsx";
import { PersonalInfoProvider } from "./context/personalInfoStore.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PersonalInfoProvider>
      <App />
    </PersonalInfoProvider>
  </StrictMode>,
);

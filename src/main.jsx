import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/Home/Home";
import "./i18n";
import "./styles/index.css";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

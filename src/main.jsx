import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ClimaApp from "./Clima-App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClimaApp />
  </StrictMode>
);

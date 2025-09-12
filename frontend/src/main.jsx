import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CuponProviderWrapper } from "./contexts/Cupon.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CuponProviderWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CuponProviderWrapper>
  </StrictMode>
);

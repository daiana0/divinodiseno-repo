import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CuponProviderWrapper } from "./contexts/Cupon.context.jsx";
import { AuthProvider } from "./contexts/Auth.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CuponProviderWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CuponProviderWrapper>
    </AuthProvider>
  </StrictMode>
);

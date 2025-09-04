import { createRoot } from "react-dom/client";
import Home from "./home.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <Home />
    </AuthProvider>
  </BrowserRouter>
);

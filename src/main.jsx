import { createRoot } from "react-dom/client";
import Home from "./home.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

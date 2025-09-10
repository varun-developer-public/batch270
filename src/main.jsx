import { createRoot } from "react-dom/client";
import Home from "./home.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import {Provider } from 'react-redux';
import store from './redux/store.jsx';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <AuthProvider> */}
    <Provider store={store}>
      <Home />
    </Provider>
    {/* </AuthProvider> */}
  </BrowserRouter>
);

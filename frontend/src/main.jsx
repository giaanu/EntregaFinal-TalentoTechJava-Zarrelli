import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { CartProvider } from "./contexts/CartContext/useCartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
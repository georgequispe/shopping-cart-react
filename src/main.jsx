import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { ProductosProvider } from "./contexts/ProductosContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from "react-helmet-async"; // <-- Importa HelmetProvider

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ProductosProvider>
        <AuthProvider>
          <ShoppingCartProvider>
            <App />
          </ShoppingCartProvider>
        </AuthProvider>
      </ProductosProvider>
    </HelmetProvider>
  </React.StrictMode>
);

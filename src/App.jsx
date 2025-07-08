import { Item } from "./components/Item";
import { Navbar } from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./components/ShoppingCart";
import { Home } from "./layouts/Home";
import Contacto from "./components/Contacto";
import { About } from "./components/About";
import { ProductosDetalle } from "./components/ProductosDetalle";
import { Admin } from "./components/Admin";
import FormularioEdicion from "./components/Formularioedicion";
import LoginEmail from "./components/LoginEmail";
import FormularioProducto from "./components/FormularioProducto";
import Register from "./components/Register";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <Router>
      <div className="app-layout" style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Item />} />
          <Route path="/productos/:id" element={<ProductosDetalle />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/login" element={<LoginEmail />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/agregar-producto" element={<FormularioProducto />} />
          <Route path="/admin/editarProductos" element={<FormularioProducto />} />
          <Route path="/admin/editar-producto/:id" element={<FormularioEdicion />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default App;

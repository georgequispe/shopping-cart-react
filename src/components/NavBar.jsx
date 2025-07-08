import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";
import { useAuthContext } from "../contexts/AuthContext";
import { FaShoppingCart } from "react-icons/fa";
import { StyledNavbar, NavList, NavItem } from "./styled/NavBarStyled"; // Importa desde carpeta styled

export const Navbar = () => {
  const { user, admin } = useAuthContext(); // Obtener el usuario autenticado desde el contexto
  const [cart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <StyledNavbar>
      <NavList>
        <NavItem>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Inicio
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/productos" style={{ color: "#fff", textDecoration: "none" }}>
            Productos
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/cart" style={{ color: "#fff", textDecoration: "none" }}>
            <FaShoppingCart />{" "}
            {quantity > 0 && (
              <span className="cart-count">({quantity})</span>
            )}
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/contacto" style={{ color: "#fff", textDecoration: "none" }}>
            Contacto
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>
            Login
          </Link>
        </NavItem>
        {admin && (
          <>
            <NavItem>
              <Link to="/admin" style={{ color: "#fff", textDecoration: "none" }}>
                Admin
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/agregar-producto" style={{ color: "#fff", textDecoration: "none" }}>
                Agregar Productos
              </Link>
            </NavItem>
          </>
        )}
      </NavList>
    </StyledNavbar>
  );
};

export default Navbar;
          
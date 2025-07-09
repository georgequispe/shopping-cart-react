// src/components/Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";
import { useAuthContext } from "../contexts/AuthContext";
import { FaShoppingCart } from "react-icons/fa";
import { Navbar, Nav, Container } from "react-bootstrap";
import { StyledNavbar, StyledNavLink, CartCount } from "./styled/NavBarStyled";

export const NavbarCustom = () => {
  const { user, admin } = useAuthContext();
  const [cart] = useContext(CartContext);
  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <StyledNavbar>
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Shoppicart</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <StyledNavLink as={Link} to="/">Inicio</StyledNavLink>
              <StyledNavLink as={Link} to="/productos">Productos</StyledNavLink>
              <StyledNavLink as={Link} to="/contacto">Contacto</StyledNavLink>
              <StyledNavLink as={Link} to="/login">Login</StyledNavLink>
              {admin && (
                <>
                  <StyledNavLink as={Link} to="/admin">Admin</StyledNavLink>
                  <StyledNavLink as={Link} to="/agregar-producto">Agregar Productos</StyledNavLink>
                </>
              )}
            </Nav>
            <Nav>
              <StyledNavLink as={Link} to="/cart">
                <FaShoppingCart />
                {quantity > 0 && <CartCount>({quantity})</CartCount>}
              </StyledNavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledNavbar>
  );
};

export default NavbarCustom;
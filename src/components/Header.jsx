import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HeaderContainer, Title, Slogan, Promo } from "./styled/HeaderStyled";

export const Header = () => {
  return (
    <HeaderContainer style={{
      backgroundColor: "#fffde7", // amarillo pastel, alegre y cálido
      padding: "24px 0",
      textAlign: "center"
    }}>
      <Title style={{
        color: "#388e3c", // verde botella, profesional y natural
        fontWeight: "bold",
        fontSize: "2.5rem",
        marginBottom: 0
      }}>
        Bienvenidos a la Verduleria "La Saludable"
      </Title>
      <Slogan style={{
        color: "#ff9800", // naranja vibrante, energía y confianza
        fontWeight: "bold",
        fontSize: "1.5rem",
        marginTop: 8,
        marginBottom: 0
      }}>
        Tu Salud es Nuestra Prioridad
      </Slogan>
      <Promo style={{
        color: "#2e7d32", // verde oscuro, confianza
        fontWeight: "bold",
        fontSize: "1.1rem",
        marginTop: 12
      }}>
        ¡Envíos gratis en compras mayores a $50000!
      </Promo>
      <Navbar expand="lg" bg="light" variant="light" style={{ marginTop: 8 }}>
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/logo.jpg"
              alt="Logo"
              style={{ width: 40, height: 40, marginRight: 8, verticalAlign: "middle" }}
            />
            La Saludable
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/productos">Productos</Nav.Link>
              <Nav.Link href="/contacto">Contacto</Nav.Link>
              <Nav.Link href="/cart">Carrito</Nav.Link>
              <NavDropdown title="Más" id="basic-nav-dropdown">
                <NavDropdown.Item href="/nosotros">Nosotros</NavDropdown.Item>
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderContainer>
  );
}


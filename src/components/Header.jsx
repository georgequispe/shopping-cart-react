 import { HeaderContainer, Title, Slogan, Promo } from "./styled/HeaderStyled";

export const Header = () => {
  return (
    <HeaderContainer style={{
      backgroundColor: "#fffde7",
      padding: "24px 0",
      textAlign: "center"
    }}>
      <Title style={{
        color: "#388e3c",
        fontWeight: "bold",
        fontSize: "2.5rem",
        marginBottom: 0
      }}>
        Bienvenidos a la Verdulería "La Saludable"
      </Title>
      <Slogan style={{
        color: "#ff9800",
        fontWeight: "bold",
        fontSize: "1.5rem",
        marginTop: 8,
        marginBottom: 0
      }}>
        Tu Salud es Nuestra Prioridad
      </Slogan>
      <Promo style={{
        color: "#2e7d32",
        fontWeight: "bold",
        fontSize: "1.1rem",
        marginTop: 12
      }}>
        ¡Envíos gratis en compras mayores a $50000!
      </Promo>
    </HeaderContainer>
  );
};
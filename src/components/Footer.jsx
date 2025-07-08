import { FaTwitter, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiCreditCard2, CiCreditCard1, CiMoneyBill } from "react-icons/ci";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#ff9800", // naranja vibrante, alegre y dinámico
        color: "#fff",
        padding: "32px 0 16px 0",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "1.1rem"
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <h4 style={{ marginBottom: 8 }}>La Verdulería "La Saludable"</h4>
        <div style={{ marginBottom: 8 }}>
          Dirección: Av. Regional de los Patricios 1640, Barracas
        </div>
        <div style={{ marginBottom: 8 }}>
          <span role="img" aria-label="tel">📞</span> Teléfono: (11) 2456-7890
        </div>
        <div style={{ marginBottom: 8 }}>
          <span role="img" aria-label="mail">✉️</span> Email: contacto@lasaludable.com
        </div>
        <div style={{ marginBottom: 8 }}>
          <strong>Horario de atención:</strong><br />
          Lunes a Sábado: 8:00 - 20:00<br />
          Domingos y feriados: 9:00 - 14:00
        </div>
        <div style={{ marginBottom: 8 }}>
          <strong>Medios de pago aceptados:</strong><br />
          <span role="img" aria-label="tarjeta">💳</span> Tarjeta de débito, crédito, <span role="img" aria-label="efectivo">💵</span> Efectivo, Mercado Pago
        </div>
        <div style={{ marginBottom: 8 }}>
          Síguenos en <a href="https://twitter.com" style={{ color: "#fff", textDecoration: "underline" }}>Twitter</a> y <a href="https://github.com" style={{ color: "#fff", textDecoration: "underline" }}>Github</a>
        </div>
        <div style={{ fontSize: 14, marginTop: 16, fontWeight: "normal" }}>
          © 2025 George. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;



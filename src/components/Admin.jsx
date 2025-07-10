import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export const Admin = () => {
  const { admin } = useAuthContext();

  if (!admin) {
    return <Navigate to={"/login"} replace />;
  }

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "24px",
        backgroundColor: "#fff9db", // amarillo suave 🌞
        borderRadius: "12px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "1.8rem", marginBottom: "16px", color: "#333" }}>
        Próximamente la verdulería <strong>"La Saludable"</strong> abriendo sus puertas al público
      </h1>
      <p style={{ color: "#555" }}>componente admin.</p>
    </div>
  );
};
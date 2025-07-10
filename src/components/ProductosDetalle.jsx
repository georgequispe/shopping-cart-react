import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { dispararSweetBasico } from "../assets/SweetAlert";
import { useProductosContext } from "../contexts/ProductosContext";

export const ProductosDetalle = () => {
  const { admin } = useAuthContext();
  const { id } = useParams();
  const navegar = useNavigate();
  const [error, setError] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState(null);
  const { eliminarProducto, obtenerProducto } = useProductosContext();

  useEffect(() => {
    obtenerProducto(id)
      .then((productoRecibido) => {
        setProducto(productoRecibido);
        setCargando(false);
      })
      .catch((error) => {
        setError(error.message || error);
        setCargando(false);
      });
  }, [id]);

  const dispararEliminar = () => {
    eliminarProducto(id)
      .then(() => {
        navegar("/productos");
        dispararSweetBasico(
          "Producto eliminado",
          "El producto se eliminó correctamente",
          "success",
          "Cerrar"
        );
      })
      .catch((error) => {
        dispararSweetBasico(
          "Hubo un problema al eliminar el producto",
          error,
          "error",
          "Cerrar"
        );
      });
  };

  return (
    <div style={{
      maxWidth: 700,
      margin: "40px auto",
      padding: "24px",
      backgroundColor: "#fff9db", // amarillo claro
      borderRadius: "12px",
      boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
      textAlign: "center"
    }}>
      {cargando && <p>Cargando producto...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {producto && (
        <div>
          <h2 style={{ marginBottom: "20px" }}>{producto.name}</h2>
          <img
            src={producto.imagen}
            alt={producto.name}
            style={{
              maxWidth: "100%",
              borderRadius: "12px",
              marginBottom: "16px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.08)"
            }}
          />
          <p style={{ fontSize: "1.1rem", marginBottom: "12px" }}>{producto.description}</p>
          <p style={{ fontWeight: "bold", marginBottom: "24px" }}>${producto.price}</p>

          {admin && (
            <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
              <button
                onClick={dispararEliminar}
                style={{
                  background: "#dc3545",
                  color: "#fff",
                  border: "none",
                  padding: "10px 16px",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                Eliminar
              </button>

              <Link to={`/admin/editar-producto/${id}`}>
                <button
                  style={{
                    background: "#0d6efd",
                    color: "#fff",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                >
                  Editar
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
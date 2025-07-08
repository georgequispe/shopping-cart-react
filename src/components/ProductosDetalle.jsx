import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { dispararSweetBasico } from "../assets/SweetAlert";
import { CartContext } from "../contexts/ShoppingCartContext";
import { useProductosContext } from "../contexts/ProductosContext";

export const ProductosDetalle = () => {
  const { admin } = useAuthContext();
  const { id } = useParams();
  const navegar = useNavigate();
  const [error, setError] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState(null);
  const { eliminarProducto, obtenerProductos } = useProductosContext();

  useEffect(() => {
    obtenerProductos(id)
      .then((productos) => {
        // Si obtenerProducto devuelve el producto, úsalo directamente
        // Si devuelve todos los productos, busca el producto aquí
        const encontrado = Array.isArray(productos)
          ? productos.find((item) => item.id === id)
          : productos;
        setProducto(encontrado);
        setCargando(false);
      })
      .catch((error) => {
        if (error === "Producto no encontrado") {
          setError("Producto no encontrado");
        }
        if (error === "Hubo un error al obtener el producto.") {
          setError("Hubo un error al obtener el producto.");
        }
        setCargando(false);
      });
  }, [id]);

  function dispararEliminar() {
    eliminarProducto(id)
      .then(() => {
        navegar("/productos");
        dispararSweetBasico("Producto eliminado", "El producto se eliminó correctamente", "success", "Cerrar");
      })
      .catch((error) => {
        dispararSweetBasico("Hubo un problema al eliminar el producto", error, "error", "Cerrar");
      });
  }

  if (error) return <p>{error}</p>;
  if (cargando) return <p>Cargando...</p>;
  if (!producto) return null;

  return (
    <div className="item-list">
      <div className="item-box">
        <img src={producto.imagen} alt={producto.name} />
        <div className="item-info">
          <h2>{producto.name}</h2>
          <p>Precio: ${producto.price} x kg</p>
          <p>Descripción: {producto.description}</p>
        </div>
        {admin ? (
          <Link to={`/admin/EditarProducto/${producto.id}`}>
            <button>Editar Producto</button>
          </Link>
        ) : null}
        {admin ? (
          <button onClick={dispararEliminar}>Eliminar Producto</button>
        ) : null}
        <button onClick={() => navegar("/productos")} style={{ marginTop: 20 }}>
          Volver a productos
        </button>
      </div>
    </div>
  );
};

export default ProductosDetalle;
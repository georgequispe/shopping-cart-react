import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import { useNavigate } from "react-router-dom";
import { dispararSweetBasico } from "../assets/SweetAlert";
import { Helmet } from "react-helmet-async";
import { useProductosContext } from "../contexts/ProductosContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/Item.css";

export const Item = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useContext(CartContext);
  const [productosLocal, setProductosLocal] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const { obtenerProductos } = useProductosContext();
  const productosPorPagina = 10;
  const [paginaActual, setPaginaActual] = useState(1);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    obtenerProductos()
      .then((productosData) => {
        setProductosLocal(productosData);
        setCargando(false);
      })
      .catch(() => {
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  useEffect(() => {
    setPaginaActual(1); // Reiniciar a la primera página si cambia el filtro
  }, [filtro]);

  const navegar = (id) => {
    navigate(`/productos/${id}`);
  };

  const productosFiltrados = productosLocal.filter((p) =>
    (p.name || "").toLowerCase().includes(filtro.toLowerCase())
  );

  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosActuales = productosFiltrados.slice(indicePrimerProducto, indiceUltimoProducto);

  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

  const addToCart = (producto) => {
    const id = producto.id;
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...currItems, { ...producto, quantity: 1 }];
      }
    });
    toast.success("Producto agregado al carrito", { autoClose: 3000 });
  };

  const removeItem = (productoId) => {
    setCart((currItems) => {
      const item = currItems.find((i) => i.id === productoId);
      if (!item) return currItems;

      const updatedItems =
        item.quantity === 1
          ? currItems.filter((i) => i.id !== productoId)
          : currItems.map((i) =>
              i.id === productoId ? { ...i, quantity: i.quantity - 1 } : i
            );

      toast.info("Producto eliminado del carrito", { autoClose: 3000 });
      return updatedItems;
    });
  };

  const getQuantityById = (id) =>
    cart.find((item) => item.id === id)?.quantity || 0;

  if (cargando) {
    return <div>Cargando productos...</div>;
  } else if (error) {
    return <div className="text-danger text-center">{error}</div>;
  } else {
    return (
      <div>
        <Helmet>
          <title>Bienvenido | La Saludable</title>
          <meta name="description" content="Explora nuestra variedad de productos." />
        </Helmet>

        <input
          type="text"
          placeholder="Buscar productos..."
          className="form-control mb-3"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />

        {productosActuales.length === 0 ? (
          <p className="text-muted text-center">No se encontraron productos.</p>
        ) : (
          <div className="item-list">
            {productosActuales.map((producto) => (
              <div key={producto.id} className="item-box">
                {getQuantityById(producto.id) > 0 && (
                  <div className="item-quantity">{getQuantityById(producto.id)}</div>
                )}
                <div>{producto.name}</div>
                <img src={producto.imagen} alt={producto.name} />
                <div className="item-info">
                  ${producto.price} x kg
                </div>
                {getQuantityById(producto.id) === 0 ? (
                  <button className="item-add-button" onClick={() => addToCart(producto)}>
                    + Añadir al carrito
                  </button>
                ) : (
                  <button className="item-plus-button" onClick={() => addToCart(producto)}>
                    + agregar más
                  </button>
                )}
                <button className="item-detail-button" onClick={() => navegar(producto.id)}>
                  Ver detalle
                </button>
                {getQuantityById(producto.id) > 0 && (
                  <button className="item-minus-button" onClick={() => removeItem(producto.id)}>
                    restar producto
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="d-flex justify-content-center my-4 flex-wrap">
          <button
            className="btn btn-outline-secondary mx-1"
            onClick={() => cambiarPagina(paginaActual - 1)}
            disabled={paginaActual === 1}
          >
            Anterior
          </button>

          {Array.from({ length: totalPaginas }, (_, index) => (
            <button
              key={index + 1}
              className={`btn mx-1 ${paginaActual === index + 1 ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => cambiarPagina(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="btn btn-outline-secondary mx-1"
            onClick={() => cambiarPagina(paginaActual + 1)}
            disabled={paginaActual === totalPaginas}
          >
            Siguiente
          </button>
        </div>

        <ToastContainer />
      </div>
    );
  }
};
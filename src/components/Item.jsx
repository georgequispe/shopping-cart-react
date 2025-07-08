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
  //productos
  const { obtenerProductos, filtrarProductos, productos } = useProductosContext();
  const productosPorPagina = 10;
  const [paginaActual, setPaginaActual] = useState(1);
    // Calcular el índice de los productos a mostrar en la página actual
  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const [filtro, setFiltro] = useState("");
//////////////////////////////
//Paginacion////////////////////////

  useEffect(() => {
    obtenerProductos()
      .then((productosData) => {
        setProductosLocal(productosData);
        setCargando(false);
      })
      .catch((error) => {
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  function navegar(id) {
    navigate(`/productos/${id}`);
  }
// Aplica el filtro sobre productosLocal ANTES de paginar
const productosFiltrados = productosLocal.filter(
  (p) => (p.name || "").toLowerCase().includes(filtro.toLowerCase())
);
const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
const productosActuales = productosFiltrados.slice(indicePrimerProducto, indiceUltimoProducto);

  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);


  const addToCart = (producto) => {
    const id = producto.id;
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...currItems, { ...producto, quantity: 1 }];
      }
    });
    toast.success("Producto agregado al carrito", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const removeItem = (producto) => {
    const id = producto;
    const price = productosLocal.find((item) => item.id === id).price;
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        toast.info("Producto eliminado del carrito", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return currItems.filter((item) => item.id !== id);
      } else {
        toast.info("Producto eliminado del carrito", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  if (cargando) {
    return <div>Loading... </div>;
  } else if (error) {
    return <div>No hay productos</div>;
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
                  + agregar mas
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
        <div className="d-flex justify-content-center my-4">
          {Array.from({ length: totalPaginas }, (_, index) => (
            <button
              key={index + 1}
              className={`btn mx-1 ${paginaActual === index + 1 ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => cambiarPagina(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <ToastContainer />
      </div>
    );
  }
};

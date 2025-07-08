import React, { createContext, useContext, useState } from "react";
// Crear el contexto de de los productos
const ProductosContext = createContext();
export function ProductosProvider({ children }) {
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [productoEncontrado, setProductoEncontrado] = useState(null);

    const obtenerProductos = async () => {
        setCargando(true);
        const response = await fetch('https://681fe14e72e59f922ef75764.mockapi.io/productos');
        const data = await response.json();
        setProductos(data);
        setProductosFiltrados(data); // Inicialmente, todos los productos
        setCargando(false);
        return data;
    };

    const filtrarProductos = (filtro) => {
        const filtroLower = (filtro || "").toLowerCase();
        setProductosFiltrados(
            productos.filter((p) => (p.name || "").toLowerCase().includes(filtroLower))
        );
    };

    const agregarProducto = (producto) => {
        return new Promise(async (res, rej) => {
            try {
                const respuesta = await fetch('https://681fe14e72e59f922ef75764.mockapi.io/productos', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(producto),
                });

                if (!respuesta.ok) {
                    throw new Error('Error al agregar el producto.');
                }
                const data = await respuesta.json();
                res(data);
            } catch (error) {
                rej(error.message);
            }
        });
    };

    const obtenerProducto = (id) => {
        return(
            new Promise((res, rej) => {
               fetch("https://681fe14e72e59f922ef75764.mockapi.io/productos")
                .then((res) => res.json())
                .then((datos) => {
                    const productoEncontrado = datos.find((item) => item.id === id);
                    if (productoEncontrado) {
                    setProductoEncontrado(productoEncontrado);
                    res(datos)
                    } else {
                        rej("Producto no encontrado")
                    }
                })
                .catch((err) => {
                    console.log("Error:", err);
                    rej("Hubo un error al obtener el producto.");
                }); 
            })
        )
    }

    const eliminarProducto = (id) => {
        return new Promise(async (res, rej) => {
          try {
            const respuesta = await fetch(`https://681fe14e72e59f922ef75764.mockapi.io/productos/${id}`, {
              method: 'DELETE',
            });
            if (!respuesta.ok) {
              throw new Error('Error al eliminar el producto.');
            }
            res();
          } catch (error) {
            rej(error.message);
          }
        });
      };
  
    return (
        <ProductosContext.Provider value={{ productos, productosFiltrados, obtenerProductos, filtrarProductos, cargando, agregarProducto, obtenerProducto, eliminarProducto, productoEncontrado, setProductoEncontrado }}>
        {children}
        </ProductosContext.Provider> 
    );
}
export const useProductosContext = () => useContext(ProductosContext);
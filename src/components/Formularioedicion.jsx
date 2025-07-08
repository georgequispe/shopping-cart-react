import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductosContext } from "../contexts/ProductosContext";
import { Form, FormGroup, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';

function FormularioEdicion() {
  const { obtenerProducto, productoEncontrado } = useProductosContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState({
    name: "",
    imagen: "",
    price: "",
    description: "",
    id: ""
  });
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerProducto(id)
      .then(() => {
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

  // Actualiza el estado producto cuando productoEncontrado cambia y está definido
  useEffect(() => {
    if (productoEncontrado) {
      setProducto({
        name: productoEncontrado.name || "",
        imagen: productoEncontrado.imagen || "",
        price: productoEncontrado.price || "",
        description: productoEncontrado.description || "",
        id: productoEncontrado.id || ""
      });
    }
  }, [productoEncontrado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch(`https://681fe14e72e59f922ef75764.mockapi.io/productos/${producto.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
      });
      if (!respuesta.ok) {
        throw new Error('Error al actualizar el producto.');
      }
      const data = await respuesta.json();
      toast.success('Producto actualizado correctamente.');
      navigate("/productos"); // Redirige a la lista de productos
    } catch (error) {
      console.error(error.message);
      toast.error('Hubo un problema al actualizar el producto.');
    }
  };

  if (cargando) return <div>{toast.success('Cargando...')}</div>;
  if (error) return <div>{toast.error(error)}</div>;

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #0001", padding: 24 }}>
      <Form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", marginBottom: 24 }}>Editar Producto</h2>
        <FormGroup style={{ marginBottom: 16 }}>
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={producto.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup style={{ marginBottom: 16 }}>
          <Form.Label>URL de la Imagen:</Form.Label>
          <Form.Control
            type="text"
            name="imagen"
            value={producto.imagen}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup style={{ marginBottom: 16 }}>
          <Form.Label>Precio:</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={producto.price}
            onChange={handleChange}
            required
            min="0"
          />
        </FormGroup>
        <FormGroup style={{ marginBottom: 16 }}>
          <Form.Label>Descripción:</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={producto.description}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit" variant="success" style={{ width: "100%" }}>
          Actualizar Producto
        </Button>
        <ToastContainer />
      </Form>
    </div>
  );
}

export default FormularioEdicion;


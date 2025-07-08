import React, { useState } from 'react';
import { dispararSweetBasico } from '../assets/SweetAlert';
import { Form, FormGroup, Button } from "react-bootstrap";
import { useAuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { useProductosContext } from '../contexts/ProductosContext';
import { FormContainer, FormTitle, StyledSmall, StyledButton } from "./styled/FormularioProductoStyled";

const FormularioProducto = () => {
  const { agregarProducto, obtenerProductos } = useProductosContext();
  const { admin } = useAuthContext();

  const [producto, setProducto] = useState({
    name: '',
    price: '',
    description: '',
    imagen: ''
  });

  const validarFormulario = () => {
    if (!producto.name.trim()) {
      return "El nombre es obligatorio.";
    }
    if (!producto.price || producto.price <= 0) {
      return "El precio debe ser mayor a 0.";
    }
    if (!producto.description.trim() || producto.description.length < 10) {
      return "La descripción debe tener al menos 10 caracteres.";
    }
    if (!producto.imagen.trim()) {
      return "La imagen es obligatoria.";
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const validarForm = validarFormulario();
    if (validarForm === true) {
      agregarProducto(producto)
        .then((data) => {
          dispararSweetBasico("Producto agregado", "El producto se agregó correctamente", "success", "Cerrar");
          setProducto({ name: '', price: '', description: '', imagen: '' });
          obtenerProductos(); // <-- Actualiza la lista de productos
        })
        .catch((error) => {
          dispararSweetBasico("Hubo un problema al agregar el producto", error, "error", "Cerrar");
        });
    } else {
      dispararSweetBasico("Error en la carga de producto", validarForm, "error", "Cerrar");
    }
  };

  if (!admin) {
    return <Navigate to="/login" replace />;
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit2}>
        <FormTitle>Agregar Producto</FormTitle>
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
          <Form.Label>Imagen (URL o ruta local):</Form.Label>
          <Form.Control
            type="text"
            name="imagen"
            value={producto.imagen}
            onChange={handleChange}
            required
          />
          <StyledSmall>Ejemplo para local: /img/tuimagen.jpg</StyledSmall>
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
        <StyledButton type="submit" variant="success">
          Agregar Producto
        </StyledButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioProducto;
    
import React, { useState, useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Button } from "react-bootstrap";
import { dispararSweetBasico } from "../assets/SweetAlert";


const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });
  const [, setCart] = useContext(CartContext);
  const { Logout } = useAuthContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispararSweetBasico(
      "Formulario enviado correctamente",
      "Nos comunicaremos en la brevedad",
      "success",
      "cerrar"
    );
    setForm({ nombre: "", correo: "", mensaje: "" });
    setCart([]); // Vacía el carrito al enviar el formulario
    navigate("/"); // Redirige al inicio
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `url("/fondo.jpg") center/cover no-repeat`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div style={{
        maxWidth: 400,
        width: "100%",
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 24,
        background: "rgba(250,250,250,0.95)"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: 24 }}>Formulario de contacto</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup style={{ marginBottom: 16 }}>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup style={{ marginBottom: 16 }}>
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup style={{ marginBottom: 16 }}>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="tel"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup style={{ marginBottom: 16 }}>
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              name="direccion"
              value={form.direccion}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup style={{ marginBottom: 16 }}>
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              required
              rows={4}
            />
          </FormGroup>
          <Button
            type="submit"
            variant="dark"
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 4,
              cursor: "pointer"
            }}
          >
            Enviar
          </Button>
        </Form>
        <Button
          variant="danger"
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 4,
            cursor: "pointer",
            marginTop: 16
          }}
          onClick={() => {
            setCart([]);
            Logout();
            navigate("/");
          }}
        >
          Cerrar sesión y salir
        </Button>
      </div>
    </div>
  );
};

export default Contacto;
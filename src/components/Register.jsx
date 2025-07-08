import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dispararSweetBasico } from "../assets/SweetAlert";
import { Form, FormGroup, Button } from "react-bootstrap";

const Register = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    if (usuarios.find((u) => u.email === form.email)) {
      dispararSweetBasico("Este email ya está registrado 👍", "Bienvenido a la verduleria  La Saludable", "success", "cerrar");
      return;
    }
    usuarios.push({ email: form.email, password: form.password });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    dispararSweetBasico("Registro exitoso 👌", "Bienvenido a la verduleria  La Saludable", "success", "cerrar");
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `url("/foto4.jpg") center/cover no-repeat`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: 400,
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: 24,
          background: "rgba(250,250,250,0.95)",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <h2 className="mb-4 text-center">Registro de usuario</h2>
          <FormGroup className="mb-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Ingresa tu email"
              required
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Ingresa tu contraseña"
              required
            />
          </FormGroup>
          <Button type="submit" variant="success" style={{ width: "100%" }}>
            Registrarse
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;

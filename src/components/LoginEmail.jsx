import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { Form, FormGroup, Button } from "react-bootstrap";
import { LoginForm, LoginTitle } from "./styled/LoginEmailStyled"; // Importa tus styled-components

const LoginEmail = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { Login } = useAuthContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const user = usuarios.find(
      (u) => u.email === form.email && u.password === form.password
    );
    if (user) {
      Login(form.email); // Esto activa la sesión para cualquier usuario registrado
      navigate("/");
    } else {
      alert("Email o contraseña incorrectos");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `url("/fondo2.jpg") center/cover no-repeat`,
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
        <LoginForm onSubmit={handleSubmit}>
          <LoginTitle>Iniciar sesión</LoginTitle>
          <FormGroup>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button type="submit">Ingresar</Button>
          <div style={{ marginTop: 16, textAlign: "center" }}>
            <span>¿No tienes cuenta? </span>
            <Link to="/register">Registrarse</Link>
          </div>
        </LoginForm>
      </div>
    </div>
  );
};

export default LoginEmail;

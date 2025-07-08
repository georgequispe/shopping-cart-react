import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import { useAuthContext } from "../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export const ShoppingCart = () => {
  const [cart] = useContext(CartContext);
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [metodoPago, setMetodoPago] = useState("");

  // Si el usuario no está autenticado, lo redirigimos a la página de login.
  // Esta es una forma más limpia de manejar la autenticación.
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleMetodoPago = (e) => {
    setMetodoPago(e.target.value);
    navigate("/contacto");
  };

  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalPrice = cart
    .reduce((acc, curr) => acc + curr.quantity * curr.price, 0).toFixed(2);

  if (!cart || cart.length === 0) {
    return <h2>El carrito está vacío</h2>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fffde7", // amarillo pastel, alegre y cálido para el carrito
        color: "#333",
        padding: "32px 0",
      }}
    >
      <div className="cart-container">
        <h1>Gracias por su compra!</h1>
        <h1>Productos en el carrito: {cart.reduce((acc, curr) => acc + curr.quantity, 0)}</h1>
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <img src={item.imagen} alt={item.name} style={{ width: 50, height: 50, objectFit: "cover", marginRight: 10 }} />
              <span style={{ fontWeight: "bold" }}>{item.quantity} kg de {item.name}</span>
              <span style={{ marginLeft: 10 }}>Subtotal: ${item.price * item.quantity}</span>
            </div>
          ))}
        </div>
        <h3>Total: ${totalPrice}</h3>
        <button onClick={() => console.log(cart)}>Checkout</button>
        <button onClick={() => navigate("/productos")} style={{ marginLeft: 10 }}>
          Volver a productos
        </button>
        <form style={{ marginTop: 30, border: "1px solid #ccc", borderRadius: 8, padding: 16, maxWidth: 350 }}>
          <h2 style={{ marginBottom: 16 }}>Elegir un método de pago</h2>
          <p>
            <label>
              <input
                type="radio"
                name="metodoPago"
                value="mercado_pago"
                checked={metodoPago === "mercado_pago"}
                onChange={handleMetodoPago}
              />
              Mercado Pago
            </label>
          </p>
          <p>
            <label>
              <input
                type="radio"
                name="metodoPago"
                value="debito"
                checked={metodoPago === "debito"}
                onChange={handleMetodoPago}
              />
              Tarjeta de débito
            </label>
          </p>
          <p>
            <label>
              <input
                type="radio"
                name="metodoPago"
                value="credito"
                checked={metodoPago === "credito"}
                onChange={handleMetodoPago}
              />
              Tarjeta de crédito
            </label>
          </p>
        </form>
      </div>
    </div>
  );
};
export default ShoppingCart;

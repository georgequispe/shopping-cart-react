# La Saludable | E-commerce con React 🍏🛒

**La Saludable** es un proyecto de e-commerce completamente funcional desarrollado con React. Simula una tienda online de frutas y verduras, permitiendo a los usuarios explorar un catálogo de productos, agregarlos a un carrito de compras y gestionar su cuenta. Incluye un panel de administración para la gestión de inventario.

## ✨ Características Principales

- **Catálogo de Productos:** Visualización de productos con sistema de búsqueda y paginación para una navegación fluida.
- **Carrito de Compras:** Añade, elimina y actualiza la cantidad de productos en el carrito de forma dinámica.
- **Gestión de Estado Centralizada:** Uso del Context API de React para manejar el estado del carrito, los productos y la autenticación de manera eficiente.
- **Sistema de Autenticación:** Funcionalidad completa de registro e inicio de sesión para usuarios. Los datos se persisten usando `localStorage`.
- **Rutas Protegidas:** El acceso al carrito de compras y al panel de administración está restringido a usuarios autenticados.
- **Panel de Administrador:** Una sección privada para que los administradores puedan crear, editar y eliminar productos del catálogo.
- **Notificaciones Dinámicas:** Se utilizan toasts para dar feedback al usuario al agregar o quitar productos del carrito.
- **Diseño Responsivo:** La interfaz se adapta a diferentes tamaños de pantalla para una correcta visualización en dispositivos móviles y de escritorio.

## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido utilizando las siguientes tecnologías:

- **Frontend:**
  - React
  - React Router DOM para el enrutamiento de la aplicación.
  - **React Context API** para el manejo de estado global.
  - React Bootstrap y **Styled Components** para los estilos y componentes de la interfaz.
  - React Toastify para las notificaciones.
  - React Helmet Async para la gestión de etiquetas en el `<head>`.

- **Herramientas de Desarrollo:**
  - Vite como empaquetador y servidor de desarrollo.

## 🚀 Instalación y Puesta en Marcha

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/ShoppingCart-main.git
    ```

2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd ShoppingCart-main
    ```

3.  **Instala las dependencias:**
    ```bash
    npm install
    ```

4.  **Ejecuta la aplicación en modo de desarrollo:**
    ```bash
    npm run dev
    ```

5.  Abre tu navegador y visita `http://localhost:5173` (o la URL que indique la terminal).
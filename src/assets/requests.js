/*export const agregarProducto = async (producto) => {
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
  return await respuesta.json();
};*/

export const agregarProducto = async (producto) => {
  return(
    new Promise(async (res, rej) => {
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
             console.log('Producto agregado:', data);
             res(data);
          } catch (error) {
          console.error(error.message);
          rej("hubo un error al agregar el producto " + error.message);
          }
    }
  ));
};
export const eliminarProducto = (id) => {
 const confirmar = window.confirm('¿Estás seguro de eliminar?');
 if (confirmar) {
    return(
        new Promise(async (res, rej) => {
            try {
                const respuesta = await fetch(`https://mockapi.io/api/v1/productos/${id}`, {
                method: 'DELETE',
                });
                if (!respuesta.ok) throw new Error('Error al eliminar');
                alert('Producto eliminado correctamente.');
                res()
            } catch (error) {
                console.error(error.message);
                alert('Hubo un problema al eliminar el producto.');
                rej()
            }
        })
    )
 }
};

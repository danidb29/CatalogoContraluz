import "./Producto.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { carritoContext } from "../../App";
import { useContext } from "react";


export const Producto = ({ id, image, name, price, tipo, etiquetas }) => {
  const { carrito, setCarrito } = useContext(carritoContext);

  const estaEnCarrito = () => {
    let esta = 0;
    carrito.map((obj) => {
      if (obj.id === id) {
        esta = 1
      }
    })
    return esta
  }

  const producto = {
    id: id,
    image: image,
    name: name,
    price: price,
    cantidad: 1,
    etiquetas: etiquetas
  }

  const [cantidad, setCantidad] = useState(estaEnCarrito());

  const addCarrito = () => {
    setCantidad(cantidad + 1);
    toast.success('Producto Agregado a tu Carrito', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setCarrito([...carrito, producto])
  }
  const subsCarrito = () => {
    setCantidad(cantidad - 1);
    toast.warn('Producto Eliminado de tu Carrito', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    if (carrito.find(item => item.id === producto.id)) {
      const newCarrito = carrito.filter(item => item.id !== producto.id)
      setCarrito(newCarrito)
    }
  }

  return (
    <>
      <div className="info">
        <div className="image-container">
          {tipo === 'cliente' &&
            <div className="carrito">
              {cantidad == 0 ? <i className="ri-shopping-cart-line" onClick={addCarrito}></i> :
                <i className="ri-delete-bin-line" onClick={subsCarrito}></i>}
            </div>}
          {/* <div className="contador">
          <i class="ri-add-fill"></i>
          <p>{cantidad}</p>
          <i class="ri-subtract-fill"></i>
        </div> */}
          <img src={image} />
        </div>
        <div>
          <h2>{name}</h2>
          <div className="flex flex-row justify-center">
            {
              etiquetas.map(etiqueta => {
                return <p className="mx-2">{etiqueta.toLowerCase()}</p>
              })
            }
          </div>
          {
            tipo === 'cliente' ?
              <div className="precio">
                <h2>₡{price}</h2>
              </div> :
              <div className="precio" style={{ backgroundColor: "#eeb211" }}>
                <button>Editar</button>
              </div>
          }
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

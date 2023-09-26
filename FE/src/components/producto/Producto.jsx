import "./Producto.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Producto = ({ image, name, price }) => {
  const notify = () => toast("Producto Agregado Correctamente a tu Carrito!");


  const [cantidad, setCantidad] = useState(0);

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
  }

  return (
    <>
      <div className="info">
        <div clasName="carrito"></div>
        <div className="image-container">
          <div className="carrito">
            {cantidad == 0 ? <i className="ri-shopping-cart-line" onClick={addCarrito}></i> :
              <i class="ri-delete-bin-line" onClick={subsCarrito}></i>}
          </div>
          {/* <div className="contador">
          <i class="ri-add-fill"></i>
          <p>{cantidad}</p>
          <i class="ri-subtract-fill"></i>
        </div> */}
          <img src={image} />
        </div>
        <div>
          <h2>{name}</h2>
          <div className="precio">
            <h2>₡{price}</h2>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

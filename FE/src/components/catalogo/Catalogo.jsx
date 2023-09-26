import React from "react";
import { Producto } from "../producto/Producto";
import "./Catalogo.css";
export const Catalogo = () => {
  return (
    <div className="catalogo">
      <div className="productos">
        <Producto
          image="src/assets/img/cafetera.jpg"
          name="Cafetera Madera Roja"
          price="50 000"
        />
        <Producto
          image="src/assets/img/flor.jpg"
          name="Cafetera Madera Roja"
          price="50 000"
        />
      </div>
      <div className="productos">
        <Producto
          image="src/assets/img/cafetera2.jpg"
          name="Cafetera Madera Roja"
          price="50 000"
        />
        <Producto
          image="src/assets/img/flor2.jpg"
          name="Cafetera Madera Roja"
          price="50 000"
        />
      </div>
    </div>
  );
};

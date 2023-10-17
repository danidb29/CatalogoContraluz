import React from "react";
import { Producto } from "../producto/Producto";
import "./Catalogo.css";
export const Catalogo = ({ tipo }) => {

  return (
    <div className="catalogo">
      <div className="productos">
        <Producto tipo={tipo}
          image="src/assets/img/cafetera.jpg"
          name="Cafetera Madera Roja"
          price="50000"
          id='1'
        />
        <Producto tipo={tipo}
          image="src/assets/img/flor.jpg"
          name="Cafetera Madera Roja"
          price="30000"
          id='2'
        />
      </div>
      <div className="productos">
        <Producto tipo={tipo}
          image="src/assets/img/cafetera2.jpg"
          name="Cafetera Madera Roja"
          price="50000"
          id='3'
        />
        <Producto tipo={tipo}
          image="src/assets/img/flor2.jpg"
          name="Cafetera Madera Roja"
          price="50000"
          id='4'
        />
      </div>
    </div>
  );
};

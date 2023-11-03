import React, { useEffect } from "react";
import { Producto } from "../producto/Producto";
import "./Catalogo.css";
export const Catalogo = ({ tipo, productos }) => {
  console.log('productos en catalgo ', productos);
  return (
    <div className="catalogo">
      <div className="productos">
        {
        // TODO: buscar en tailwind una clase que pueda dividir de dos en dos
        // los productos para mostrarlos 
        productos.map((producto) => {
          // idProducto: 2, descripcion: 'Portaretratos', codigo: 'ABC', precio: 5000, productoEtiqueta: Array(0}
          return <Producto
            tipo={tipo}
            //TODO: poner logica de imagen
            // image = {`${producto.idProducto}.jpg`} algo asi
            image="src/assets/img/cafetera.jpg"
            name={producto.descripcion.toString()}
            price={producto.precio.toString()}
            id={producto.idProducto.toString()}
          />
        })}
      </div>
    </div>
  );
};

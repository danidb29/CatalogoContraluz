import React, { useEffect } from "react";
import { Producto } from "../producto/Producto";
import "./Catalogo.css";

export const Catalogo = ({ tipo, productos }) => {
  console.log('productos en catálogo ', productos);
  
  // Función para dividir el array de productos en grupos de dos
  const dividirProductos = (productos) => {
    const grupos = [];
    for (let i = 0; i < productos.length; i += 2) {
      grupos.push(productos.slice(i, i + 2));
    }
    return grupos;
  };

  const gruposDeProductos = dividirProductos(productos);

  return (
    <div className="catalogo">
      {gruposDeProductos.map((grupo, index) => (
        <div className="productos" key={index}>
          {grupo.map((producto) => (
            <Producto
              tipo={tipo}
              // TODO: Lógica de la imagen
              //image={src/assets/img/${producto.idProducto}.jpg}
              name={producto.descripcion.toString()}
              price={producto.precio.toString()}
              id={producto.idProducto.toString()}
              etiquetas={producto.etiquetas}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
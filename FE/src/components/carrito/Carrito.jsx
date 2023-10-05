import './Carrito.css'
import { ProductoCarrito } from './productoCarrito';
import { carritoContext } from "../../App";
import { useContext } from "react";
import { useState } from 'react';

export const Carrito = () => {

    const calculaPrecio = () => {
        let precioC = 0
        carrito.map((obj) => (
            precioC = precioC + (Number(obj.price) * obj.cantidad)
        ))
        return precioC
    }

    const { carrito, setCarrito } = useContext(carritoContext);

    const [precio, setPrecio] = useState(calculaPrecio())

    return (
        <>
            <section class="h-100" style={{ backgroundColor: 'white' }}>
                <div class="container h-100 py-5">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-10">

                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <h3 class="fw-normal mb-0 text-black">Carrito de Compras</h3>
                            </div>
                            {carrito.map((obj) => (
                                <ProductoCarrito name={obj.name} price={obj.price} image={'src/assets/img/cafetera.jpg'} id={obj.id} setPrecio={setPrecio} calculaPrecio={calculaPrecio} />
                            ))}

                            <div class="card rounded-3 mb-4">
                                <div class="card mb-4">
                                    <div class="card-header py-3">
                                        <h5 class="mb-0">Resumen de tu Compra</h5>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-group list-group-flush">

                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                <div>
                                                    <strong>Total de la Compra</strong>
                                                    <strong>
                                                        <p class="mb-0">(incluyendo IVA)</p>
                                                    </strong>
                                                </div>
                                                <span><strong>{'₡' + precio}</strong></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="d-grid">
                                <button class="btn btn-primary" type="button">
                                    Comprar Por Whatssap
                                    <i class="fa-brands fa-whatsapp"></i>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
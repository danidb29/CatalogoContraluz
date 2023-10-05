import { useState } from "react";
import { carritoContext } from "../../App";
import { useContext } from "react";

export const ProductoCarrito = ({ name, image, price, id, setPrecio, calculaPrecio }) => {

    const { carrito, setCarrito } = useContext(carritoContext);

    const [cantidad, setCantidad] = useState(1);

    const actualizarCantidad = (cantidad) => {

    }

    const addCarrito = () => {
        setCantidad(cantidad + 1);
        let producto = carrito.find(obj => obj.id === id)
        producto.cantidad = cantidad + 1
        setPrecio(calculaPrecio())
    }

    const subsCarrito = () => {
        setCantidad(cantidad - 1);
        let producto = carrito.find(obj => obj.id === id)
        if (cantidad <= 1) {
            setCantidad(1)
            producto.cantidad = 1
        } else {
            producto.cantidad = cantidad - 1
        }
        setPrecio(calculaPrecio())
    }

    return (
        <>
            <div class="card rounded-3 mb-4 shadow">
                <div class="card-body p-4">
                    <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-md-2 col-lg-2 col-xl-2 d-flex justify-content-center">
                            <img
                                src={image}
                                class="img-fluid rounded-3" alt="Cotton T-shirt" style={{ maxHeight: '142px' }} />
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3 d-flex justify-content-center">
                            <p class="lead fw-normal mb-2">{name}</p>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button class="btn btn-link px-2"
                                onClick={subsCarrito}>
                                <i class="fas fa-minus"></i>
                            </button>

                            <input id="form1" min="1" name="quantity" value={cantidad}
                                class="form-control form-control-sm text-center" />

                            <button class="btn btn-link px-2"
                                onClick={addCarrito}>
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 class="mb-0">{'₡' + price}</h5>
                        </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
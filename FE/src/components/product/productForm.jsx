import { useEffect, useState } from "react";
import ProductInputs from "./ProductInputs";
import UploadImage from "./uploadImage";
import { insertarProducto } from "../../services/axiosService";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProductForm = () => {
  const navigate = useNavigate();
  const initialProductState = {
    nombre: "",
    precio: 0,
    etiquetas: [],
  };
  const [productData, setProductData] = useState(initialProductState);

  const cleanEtiquetas = etiquetas => {
    const etiquetasClean = etiquetas.split(',').map(etiqueta => etiqueta.trim().toLowerCase());
    return etiquetasClean;
  };

  const cleanNombre = nombre => {
    const nombreClean = nombre.split(' ').map(nombre => {
      const firstLetter = nombre.charAt(0).toUpperCase();
      const rest = nombre.slice(1).toLowerCase();
      return firstLetter + rest;
    });
    return nombreClean.join(' ');
  };

  const handleProductChange = (data) => {
    const precio = parseFloat(data.precio);
    const etiquetas = cleanEtiquetas(data.etiquetas);
    const nombre = cleanNombre(data.nombre);
    const dataToInsert = {nombre, precio, etiquetas};
    console.log('dataToInsert: ', dataToInsert);
    setProductData(dataToInsert);
  }

  const addProduct = async () => {
    try {
      const response = await insertarProducto(productData);
      if (response.status === 200) {
        toast.success('Producto insertado correctamente', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate('/admin/catalogo');
      }
    } catch (error) {
      toast.warn(error, {
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
  }

  const handleCancel = () => {
    setProductData(initialProductState);
    navigate('/admin/catalogo')
  };

  return (
    <>
    <div className="container mx-auto my-8 border-2 rounded-lg ">
      <div className="m-6 pe-8 grid md:grid-flow-col md:gap-x-10 grid-flow-row gap-y-16">
        <ProductInputs onSubmitData={handleProductChange}/>
        <UploadImage />
      </div>
       <div className="m-10 pb-3 flex items-center justify-center gap-x-12">
        <button
          onClick={addProduct}
          className="w-full rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
        >
          Agregar Producto
        </button>
        <button 
          type="button"
          onClick={handleCancel}
          className="w-full rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
        >
          Cancelar
        </button>
      </div>
    </div>
    <ToastContainer />
    </>
  );
}

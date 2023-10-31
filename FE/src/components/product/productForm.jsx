import ProductInputs from "./ProductInputs";
import UploadImage from "./uploadImage";

export const ProductForm = () => {
  return (
    <div className="container mx-auto my-8 border-2 rounded-lg ">
      <div className="m-6 pe-8 grid md:grid-flow-col md:gap-x-10 grid-flow-row gap-y-16">
        <ProductInputs />
        <UploadImage />
      </div>
       <div className="m-10 pb-3 flex items-center justify-center gap-x-12">
        <button
          type="submit"
          className="w-full rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
        >
          Agregar Producto
        </button>
        <button 
          type="button"
          className="w-full rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
        >
          Cancelar
        </button>
      </div>
    </div>

  );
}
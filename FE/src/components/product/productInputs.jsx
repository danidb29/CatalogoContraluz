import { useState, useEffect } from "react";


//? https://codesandbox.io/s/beautiful-kirch-rupk8y?file=/src/App.js:1544-1601
//TODO: check validation, can be only with css or with events
//TODO: connect with endpoint
const ProductInputs = () => {
  const [inputFields, setInputFields] = useState({
    nombre: "",
    etiquetas: [],
    precio: 0,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues) => {
    let errors = {};
    if (inputValues.nombre.length < 5) {
      errors.nombre = "Nombre muy corto";
    }
    if (inputValues.etiquetas.length < 5) {
      errors.etiquetas = "Etiquetas muy corto";
    }
    if (!inputValues.precio || inputValues.precio < 0) {
      errors.precio = "Precio debe ser mayor a 0";
    }
    return errors;
  };
  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };

  const finishSubmit = () => {
    console.log(inputFields);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);


  return (
    <div>
      {Object.keys(errors).length === 0 && submitting ? (
        <span className="success">Successfully submitted ✓</span>
      ) : null}
      <form>
        <div className="p-3 grid grid-flow-row gap-y-12 sm:grid-rows-3">
          <div className="sm:row-span-2 flex items-center">
            <label htmlFor="nombre" className="block text-base font-medium leading-6 text-gray-900 mr-6 w-1/4 text-left">
              Nombre
            </label>
            <div className="flex-1">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-slate-50 sm:max-w-md">
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  value={inputFields.nombre}
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                  placeholder="Nombre del producto"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                {errors.nombre ? (
                  <p className="text-red">Email should be at least 15 characters long</p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="sm:row-span-2 flex items-center">
            <label htmlFor="precio" className="block text-base font-medium leading-6 text-gray-900 mr-6 w-1/4 text-left">
              Precio
            </label>
            <div className="flex-1">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-slate-50 sm:max-w-md">
                <input
                  type="text"
                  name="precio"
                  id="precio"
                  value={inputFields.precio}
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Precio del producto"
                />
              </div>
            </div>
          </div>
          <div className="sm:row-span-2 flex items-center">
            <label htmlFor="etiquetas" className="block text-base font-medium leading-6 text-gray-900 mr-6 w-1/4 text-left">
              Etiquetas
            </label>
            <div className="flex-1">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-slate-50 sm:max-w-md">
                <input
                  type="text"
                  name="etiquetas"
                  id="etiquetas"
                  value={inputFields.etiquetas}
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Etiquetas del producto"
                />
              </div>
              <p className="text-xs text-start text-gray-400">Separar por comas</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ProductInputs;
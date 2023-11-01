import { PhotoIcon, ArrowUpCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react';
//? https://tailwindui.com/components/application-ui/forms/form-layouts

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="col-span-full ms-2">
        <label htmlFor="cover-photo" className="flex mb-3 text-sm font-medium leading-6 text-gray-900">
          Adjuntar Imagen
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          {selectedImage ? (
            <div>
              <img src={selectedImage} alt="Preview" className="w-40 h-40 object-contain" />
              <button onClick={clearImage} className="mt-2 text-blue-600 cursor-pointer">
                Cambiar imagen
              </button>
            </div>
          ) : (
            <div className="text-center">
              <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
              <div className="mt-4 block md:flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500"
                >
                  <span>Seleccionar archivo</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleImageChange}
                  />
                </label>
                <p className="pl-1">o arrastra el archivo</p>
              </div>
            </div>
          )}
        </div>
        <p className="text-xs leading-5 text-gray-400"> Formatos aceptados: JPG, JPGE, PNG</p>
      </div>
    </div>
  );
};

export default UploadImage;
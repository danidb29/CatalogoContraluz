import { PhotoIcon, ArrowUpCircleIcon } from '@heroicons/react/24/solid'
//? https://tailwindui.com/components/application-ui/forms/form-layouts

const UploadImage = () => {
  return (
    <div>
      <div className="col-span-full ms-2">
        <label htmlFor="cover-photo" className="flex mb-3 text-sm font-medium leading-6 text-gray-900">
          Adjuntar Imagen
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
            <div className="mt-4 block md:flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500"
              >
                <span>Seleccionar archivo</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
              <p className="pl-1">o arrastra el archivo</p>
            </div>
          </div>
        </div>
        <p className="text-xs leading-5 text-gray-400"> Formatos aceptados: JPG, JPGE, PNG</p>
      </div>
    </div>
  )
}

export default UploadImage;

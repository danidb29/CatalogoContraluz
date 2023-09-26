import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
const LoginForm = () => {
  
  const [inputFields, setInputFields] = useState({
    usuario: "",
    password: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };

  const finishSubmit = () => {
    console.log(inputFields);
  };

 

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className=" flex sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-16 w-auto"
          src="src\assets\images\logo-letras-1.png"
          alt="Logo letras"
        />
        <img
          className="mx-auto h-16 w-auto"
          src="src\assets\images\logotipo-1.png"
          alt="Logo"
        />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="user" className="flex text-sm font-medium leading-6 text-gray-900">
              Usuario
            </label>
            <div className="mt-2 ">
              <UserIcon className="h-7 w-7 absolute ml-2 mt-1 text-gray-300 pointer-events-none" aria-hidden="true" />
              <input
                id="user"
                name="user"
                type="email"
                autoComplete="user"
                required
                className="pr-3 pl-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Contraseña
              </label>
            </div>
            <div className="mt-2">
              <LockClosedIcon className="h-7 w-7 absolute ml-2 mt-1 text-gray-300 pointer-events-none" aria-hidden="true" />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="off"
                required
                className="pr-3 pl-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Ingresar
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default LoginForm;


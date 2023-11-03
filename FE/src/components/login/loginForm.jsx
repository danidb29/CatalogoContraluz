import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { login } from '../../services/axiosService';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {

  const [inputFields, setInputFields] = useState({
    correo: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setInputFields(inputFields);
      console.log(inputFields);
      const response = await login(inputFields);
      console.log('response: ', response);
      if (response.status === 200) {
        // agregar una mejor autenticacion
        localStorage.setItem('usuario', response.data);
        navigate('/administrador');
      }
    } catch (error) {
      //! handle error on BE
      if (error.response.status === 401) {
        alert('Usuario o contraseña incorrectos');
      } else if (error.response.status === 400) {
        alert('Usuario o contraseña incorrectos');
      } else if (error.response.status === 500) {
        console.log('Server error:', error);
      }
      console.log('error: ', error);
    }
  };

  return (
    <div className="flex h-[85vh] justify-center items-center lg:px-8 bg-gray-200">
      <div className="sm:w-full sm:max-w-md p-8 bg-white rounded-xl ">
        <form className="space-y-10 pb-24" onSubmit={handleSubmit}>
          <label className="flex text-3xl font-medium leading-6 text-green-500 ">
            Log in
          </label>
          <div className="flex flex-col">
            <label htmlFor="correo" className="flex text-sm font-medium leading-6 text-gray-900">
              Usuario
            </label>
            <div className="relative mt-2">
              <UserIcon className="h-7 w-7 absolute ml-2 mt-1 text-gray-300 pointer-events-none" aria-hidden="true" />
              <input
                id="correo"
                name="correo"
                type="email"
                autoComplete="correo"
                required
                className="pl-10 pr-3 py-2 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-lg sm:leading-6"
                onChange={(event) => setInputFields({ ...inputFields, correo: event.target.value })}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Contraseña
            </label>
            <div className="relative mt-2">
              <LockClosedIcon className="h-7 w-7 absolute ml-2 mt-1 text-gray-300 pointer-events-none" aria-hidden="true" />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="off"
                required
                className="pl-10 pr-3 py-2 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-lg sm:leading-6"
                onChange={(event) => setInputFields({ ...inputFields, password: event.target.value })}
              />
            </div>
          </div>

          <div className="flex">
            <button
              type="submit"
              className="w-full px-3 py-2.5 text-lg font-semibold leading-6 text-white bg-green-500 rounded-md shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
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


import { NavBar } from "./components/navbar/NavBar";
import { Inicio } from "./components/inicio/Inicio";
import { CatalogoCliente } from "./components/catalogoCliente/CatalogoCliente";
import { CatalogoAdmin } from "./components/catalogoAdmin/CatalogoAdmin";
import { Carrito } from "./components/carrito/Carrito"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import LoginForm from "./components/login/loginForm";
import React, { useState } from "react";

export const carritoContext = React.createContext({
  carrito: [],
  setCarrito: () => { }
});


function App() {
  const [carrito, setCarrito] = useState([]);
  const valueCarrito = { carrito, setCarrito }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Inicio />} />
        <Route path="/administrador" element={<LoginForm />} />
        <Route path="/catalogo" element={
          <carritoContext.Provider value={valueCarrito}>
            <CatalogoCliente />
          </carritoContext.Provider>

        } />
        <Route path="/carrito" element={
          <carritoContext.Provider value={valueCarrito}>
            <Carrito />
          </carritoContext.Provider>
        } />
        <Route path='/catalogoAdmin' element={<CatalogoAdmin />} />
      </Route>
    )
  );
  return (
    <carritoContext.Provider value={valueCarrito}>
      <div>
        <RouterProvider router={router} />
      </div>
    </carritoContext.Provider>
  );
}

const Root = () => {
  return (
    <>
      <NavBar></NavBar>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;

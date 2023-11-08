import { NavBar } from "./components/navbar/NavBar";
import { Inicio } from "./components/inicio/Inicio";
import { CatalogoCliente } from "./components/catalogoCliente/CatalogoCliente";
import { CatalogoAdmin } from "./components/catalogoAdmin/CatalogoAdmin";
import { Carrito } from "./components/carrito/Carrito";
import { ProductForm } from "./components/product/productForm";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import LoginForm from "./components/login/loginForm";
import React, { useEffect, useState } from "react";
import { getProductos } from "./services/axiosService";

export const carritoContext = React.createContext({
  carrito: [],
  setCarrito: () => { }
});

function App() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    cargarProductos();
  }, []);

  async function cargarProductos() {
    const response = await getProductos();
    setProductos(response.data);
  }

  const [carrito, setCarrito] = useState([]);
  const valueCarrito = { carrito, setCarrito }
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Inicio />} />
        {/* <Route path="/administrador" element={<LoginForm />} /> */}
        <Route path="/catalogo" element={
          <carritoContext.Provider value={valueCarrito}>
            <CatalogoCliente productos={productos} />
          </carritoContext.Provider>

        } />
        <Route path="/carrito" element={
          <carritoContext.Provider value={valueCarrito}>
            <Carrito />
          </carritoContext.Provider>
        } />
        <Route path='/admin/catalogo' element={<CatalogoAdmin productos={productos} />} />
        <Route path="/catalogo" element={<CatalogoCliente productos={productos} />} />
        <Route path="/agregarProducto" element={<ProductForm />} />
        <Route path="/admin/login" element={<LoginForm />} />
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
      <NavBar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;

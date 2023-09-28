import  {NavBar}  from "./components/navbar/NavBar";
import  {Inicio}  from "./components/inicio/Inicio";
import  {CatalogoCliente}  from "./components/catalogoCliente/CatalogoCliente";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import LoginForm from "./components/login/loginForm";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Inicio />} />
        <Route path="/catalogo" element={<CatalogoCliente />} />
        <Route path="/administrador" element={<LoginForm/>}/>
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
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

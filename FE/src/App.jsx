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
  let isAuthenticated = localStorage.getItem('usuario') ? true : false;
  console.log('isAuthenticated: ', isAuthenticated);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root isAuthenticated={isAuthenticated}/>}>
        <Route index element={<Inicio />} />
        <Route path="/catalogo" element={<CatalogoCliente />} />
        <Route path="/administrador" element={ isAuthenticated? <CatalogoCliente/> : <LoginForm/>}/>
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = (isAuthenticated) => {
  return (
    <>
      <NavBar isAuthenticated={isAuthenticated}></NavBar>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;

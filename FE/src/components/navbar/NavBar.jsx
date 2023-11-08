import { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('usuario') ? true : false)
    console.log('isLoggedInInNavBar: ', isLoggedIn)
  }, [isLoggedIn]);
  return (
    <header>
      <div className="container-nav">
        <div className="container-logotipo">
          <Link className="flex flex-row" to="/">
            <img className="img-logo" src="src/assets/img/logo.png" />
            <img className="img-nombre" src="src/assets/img/titulo.png" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link className="links" to="/">
                Inicio
              </Link>
              <i className="ri-home-4-line"></i>
            </li>
            <li>
              <Link className="links" to="/catalogo">
                Catalogo
              </Link>
              <i className="ri-store-line"></i>
            </li>
            <li>
              <Link className="links" to="/carrito">
                Carrito
              </Link>
              <i className="ri-shopping-cart-line"></i>
            </li>
            <li>
              <Link className="links" to={'/admin/catalogo'}>
                Administrador
              </Link>
              <i className="ri-admin-line"></i>
            </li>
            {/* {isLoggedIn && */}
              <li>
                <Link className="links" to="/" onClick={() => localStorage.removeItem('usuario')()}>
                  Cerrar Sesión
                </Link>
                <i className="ri-user-line hover:text-red-500"></i>
              </li>
            {/* }
              Se tiene que volver a renderizar el navbar para mostrar el botón de cerrar sesión
              pero no se está renderizando de nuevo, por ahora se mantiene el cerrar sesion fijo
             */}
          </ul>
        </nav>
        <div className="bx bx-menu" id="menu-icon">
          <i className="ri-menu-line"></i>
        </div>
      </div>
    </header>
  );
};

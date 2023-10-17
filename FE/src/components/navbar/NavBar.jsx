import "./NavBar.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const NavBar = ({ isAuthenticated }) => {
  return (
    <header>
      <div className="container-nav">
        <div className="container-logotipo">
          <img className="img-logo" src="src/assets/img/logo.png" />
          <img className="img-nombre" src="src/assets/img/titulo.png" />
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
              <Link className="links" to="/administrador">
                Administrador
              </Link>
              <i className="ri-admin-line"></i>
            </li>
            {isAuthenticated && (
              <li>
                <Link className="links" to="/" onClick={ localStorage.removeItem('usuario') }>
                  Cerrar Sesión
                </Link>
                <i className="ri-user-line hover:text-red-500"></i>
              </li>
            )}
          </ul>
        </nav>
        <div className="bx bx-menu" id="menu-icon">
          <i className="ri-menu-line"></i>
        </div>
      </div>
    </header>
  );
};

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

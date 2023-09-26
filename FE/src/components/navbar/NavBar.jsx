import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
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
          </ul>
        </nav>
        <div className="bx bx-menu" id="menu-icon">
          <i className="ri-menu-line"></i>
        </div>
      </div>
    </header>
  );
};

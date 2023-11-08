import { SearchBar } from "../searchBar/SearchBar";
import { Catalogo } from "../catalogo/Catalogo";
import './CatalogoAdmin.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const CatalogoAdmin = ({productos}) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('usuario') ? true : false);
    useEffect(() => {
        // Checking if user is not loggedIn
        if (!isLoggedIn) {
          navigate("/admin/login");
        }
      }, [navigate, isLoggedIn]);
    return (
        <>
            <div className="agregarP">
                <div>
                    <button>
                        <i class="ri-add-circle-fill" onClick={() => navigate('/agregarProducto')}></i>
                    </button>
                    <label>Agregar Producto</label>
                </div>
            </div>
            <SearchBar />
            <Catalogo tipo={'admin'} productos = { productos } />
        </>
    );
};
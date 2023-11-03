import { SearchBar } from "../searchBar/SearchBar";
import { Catalogo } from "../catalogo/Catalogo";
import './CatalogoAdmin.css'
//import { useNavigate } from "react-router-dom";

export const CatalogoAdmin = ({productos}) => {
    //const navigate = useNavigate();
    return (
        <>
            <div className="agregarP">
                <div>
                    <button>
                        <i class="ri-add-circle-fill"></i>
                    </button>
                    <label>Agregar Producto</label>
                </div>
            </div>
            <SearchBar />
            <Catalogo tipo={'admin'} productos = { productos } />
        </>
    );
};
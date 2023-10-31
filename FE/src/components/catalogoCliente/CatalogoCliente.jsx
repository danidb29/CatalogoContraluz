import { SearchBar } from "../searchBar/SearchBar";
import { Catalogo } from "../catalogo/Catalogo";

export const CatalogoCliente = ({productos}) => {
  return (
    <>
      <SearchBar />
      <Catalogo tipo={'cliente'} productos = { productos } />
    </>
  );
};

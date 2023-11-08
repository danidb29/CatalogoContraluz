import APIRequest from "../config/axios.config";

// Put all the calls to the API here

//* example
export function login(values) {
  const data = {
      "correo": values.correo.toString().trim(),
      "password": values.password.toString().trim()
  }
  return APIRequest.post('/usuario/login', data);
}

export function getProductos() {
  return APIRequest.get('/Producto');
}

export function insertarProducto(producto) {
  return APIRequest.post('/Producto/InsertarProducto', producto);
}
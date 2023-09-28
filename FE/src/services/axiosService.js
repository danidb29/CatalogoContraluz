import APIRequest from "../config/axios.config";

// Put all the calls to the API here

//* example
export function login(values) {
  const data = {
      "user": values.username.toString().trim(),
      "password": values.password.toString().trim()
  }
  return APIRequest.post('/usuario/login', data);
}

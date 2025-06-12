import axios from "axios";

export function loginAdmin(formData) {
  return axios.post("http://localhost:8080/users/signin", formData);
}

export function storeToken(jwt) {
  localStorage.setItem("token", jwt);
}

export function removeToken() {
  localStorage.removeItem("token");
}

export function getToken() {
  return localStorage.getItem("token");
}

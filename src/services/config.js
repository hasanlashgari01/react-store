import axios from "axios";

export const api = axios.create({
  baseURL: "https://leverapi.f4rd1n.ir/api/digikala",
});

api.interceptors.response.use(
  response => response.data.results,
  error => Promise.reject(error)
);

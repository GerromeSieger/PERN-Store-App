import axios from "axios";

const baseURL = import.meta.env.PROD ? import.meta.env.VITE_API_URL : "http://192.168.56.101:8000/api";

const API = axios.create({
  baseURL,
  withCredentials: true,
});

API.interceptors.request.use(
  function (req) {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) req.headers["auth-token"] = token;
    return req;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default API;

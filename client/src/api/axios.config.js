import axios from "axios";

const baseURL = 'http://app.ifahsvictor.com/api';

const API = axios.create({
  baseURL,
  withCredentials: false,
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

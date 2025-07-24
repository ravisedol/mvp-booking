import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});

api.interceptors.response.use(
  res => res,
  error => {
    if (!error.response || error.response.status >= 500) {
      window.location.href = "/error"; // or use navigate() inside React
    }
    return Promise.reject(error);
  }
);

export default api;
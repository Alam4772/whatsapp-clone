import axios from "axios";
import { localStorageService } from "./localStorageService";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL + "/api" || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true, // if you’re using cookies
});

// Add interceptor for requests
api.interceptors.request.use(
  (config) => {
    const token = localStorageService.get("accessToken"); // or cookies if needed
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add interceptor for responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized - maybe redirect to login");
    }
    return Promise.reject(error);
  }
);

export default api;

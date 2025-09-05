import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-app-backend-1-istv.onrender.com" : "/api",
  withCredentials: true,
});

import axios from "axios";

const Api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default Api;

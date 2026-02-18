import axios from "axios";

const Api = axios.create({
  baseURL: "https://ideas-ashen.vercel.app/ideas",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default Api;

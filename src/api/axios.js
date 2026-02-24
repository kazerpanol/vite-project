import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_ENDPOINT,
  headers: {
    "X-Api-Key": import.meta.env.VITE_ENDPOINT_API_KEY,
  },
});

export default api;

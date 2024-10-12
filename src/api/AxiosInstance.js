import axios from "axios";

const BASE_URL = "https://json-server-vercel-tawny-eight.vercel.app/api/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
});

export default axiosInstance;

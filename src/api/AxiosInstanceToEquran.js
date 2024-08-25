import axios from "axios";

const BASE_URL = "https://equran.id/api/v2/surat";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export default axiosInstance;

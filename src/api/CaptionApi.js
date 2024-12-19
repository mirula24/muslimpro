import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = "https://json-server-vercel-tawny-eight.vercel.app";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});
class CaptionApi {
  static async getTotalCaption() {
    try {
      const resp = await axiosInstance.get("/caption");
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async createCaption(caption) {
    try {
      const resp = await axiosInstance.post("/captions", caption);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async getCaptionbyId(id) {
    try {
      const resp = await axiosInstance.get(`/caption/${id}`);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async updateStatusCaption(id) {
    try {
      const resp = await axiosInstance.put(`/caption/${id}`);
      console.log("response update status : ", resp.data);
      return resp.data;
    } catch (error) {}
  }

  static async deleteCaption(id) {
    try {
      const resp = await axiosInstance.delete(`caption/${id}`);
      console.log("response Delete caption", resp);
    } catch (error) {}
  }
}

export default CaptionApi;

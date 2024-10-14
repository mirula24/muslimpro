
import axios from "axios";


const BASE_URL = "https://muslim-pro-golang-production.up.railway.app";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});
class CaptionApi{

    static async getRandomCaption(){
      try {
        const resp = await axiosInstance.get("/captions/random");
        console.log(resp);
        return resp.data
        
      } catch (error) {
        console.log(error);
        
      }
    }

    static async createCaption(caption){
      try {
        const resp = await axiosInstance.post("/captions",caption)
        console.log('====================================');
        console.log("response create caption",resp.data);
        console.log('====================================');
        return resp.data
      } catch (error) {
        console.log(error);
      }
    }
    
    static async getCaptionbyId(id){
      try {
        const resp = await axiosInstance.get(`/captions/${id}`);
        console.log("response get caption by id ", resp.data);
        return resp.data
        

      } catch (error) {
        console.log(error);
        
        
      }
    }

    static async updateStatusCaption(id){
      try {
        const resp =  await axiosInstance.put(`/captions/${id}`);
        console.log("response update status : ",resp.data);
        return resp.data
      } catch (error) {
        
      }
    }

    static async deleteCaption(id){
      try {
        const resp = await axiosInstance.delete(`captions/${id}`);
        console.log("response Delete caption" , resp);
        
      } catch (error) {
        
      }
    }


}

export default CaptionApi;
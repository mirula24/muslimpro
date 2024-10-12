
import axios from "axios";


const BASE_URL = "https://muslimpro-be-production.up.railway.app/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});
class CaptionApi{
    static async getEmailFromReview(email){
        const resp = await axiosInstance.get(`/caption-for-review/email?email=${email}`);
        console.log('====================================');
        console.log("get by email in axios : ", resp.data);
        console.log('====================================');
        return resp.data;
    }
  

    static async getRandomCaption(){
      try {
        const resp = await axiosInstance.get("/captions/random");
        console.log(resp);
        return resp.data
        
      } catch (error) {
        console.log(error);
        
      }
    }
}

export default CaptionApi;
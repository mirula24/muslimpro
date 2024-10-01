

import axios from "axios";

const BASE_URL = "https://muslimpro-be-production.up.railway.app/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});
class CaptionApi{
    static async getEmailFromReview(email){
        const resp = await axiosInstance.get(`/caption-for-review/email?email=${email}`);
        console.log('====================================');
        console.log("get by email in axios : ", resp.data);
        console.log('====================================');
        return resp.data;
    }
}

export default CaptionApi;
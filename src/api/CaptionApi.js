import axiosInstance from "./AxiosInstance";


class CaptionApi{
    static async getEmailFromReview(email){
        const resp = await axiosInstance.get(`captionForReview?email=${email}`);
    }
}
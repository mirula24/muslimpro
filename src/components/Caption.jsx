import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../api/AxiosInstance";
import CaptionApi from "../api/CaptionApi";

export default function Caption() {
  const { nomor } = useParams();
  const [caption, setCaption] = useState({});
  const navigate = useNavigate();

  
  const randomCaptiion = async () => {
    const response =  await CaptionApi.getRandomCaption()
    console.log("response :::::" , response);
    setCaption(response)
    
  }
  
  useEffect(() => {
    randomCaptiion();
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center sm:px-40 px-2">
      <div className="bg-black bg-opacity-40 p-10 text-xl gap-3 rounded-lg text-white mb-36 mt-12">
        <p className="font-custom p-5 text-2xl">{caption.Baris1}</p>
        <p className="py-4">{caption.Baris2}</p>
        <p className="font-custom py-7">{caption.Baris3}</p>
        <p className="">{caption.Baris4}</p>
      </div>
      <div className="w-full justify-center flex">
        <button onClick={randomCaptiion} className="bg-customGreen hover:bg-customOrange p-5 fixed bottom-8 rounded-lg text-white font-bold">
          Random Caption untuk memperbaiki mood mu
        </button>
      </div>
    </div>
  );
}

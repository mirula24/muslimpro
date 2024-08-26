import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../api/AxiosInstance";

export default function GenerateCaption() {
  const { nomor } = useParams();
  const [caption, setCaption] = useState({});
  const navigate = useNavigate();

  const CAPTION = async (total) => {
    try {
      const result = await axiosInstance.get(`caption/${endNumber(total)}`);
      setCaption(result.data);
      console.log("caption", result.data);
      return;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  const endNumber = (total) => {
    return Math.floor(Math.random() * total) + 1;
  };

  const fetchAndSetCaption = async () => {
    try {
      const total = await axiosInstance.get(`caption/`);
      await CAPTION(total.data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAndSetCaption();
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center sm:px-40">
      <div className="bg-black bg-opacity-40 p-10 text-xl gap-3 rounded-lg">
        <p className="font-custom p-5 text-2xl">{caption.teksArab}</p>
        <p className="py-4">{caption.teksLatin}</p>
        <p className="font-custom py-7">{caption.ayat}</p>
        <p className="">{caption.artinya}</p>
      </div>
      <div className="w-full justify-center flex">
        <button onClick={fetchAndSetCaption} className="bg-customGreen hover:bg-customOrange p-5 fixed bottom-8 rounded-lg">
          Random Caption untuk memperbaiki mood mu
        </button>
      </div>
    </div>
  );
}

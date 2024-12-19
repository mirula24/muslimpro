import React, { useEffect, useState } from "react";
import CaptionApi from "../api/CaptionApi";

export default function Caption() {
  const [caption, setCaption] = useState({});

  const getRamdomCaption = async () => {
    const response = await CaptionApi.getTotalCaption();
    const totalCap = response.length;
    var id = getRandomInt(totalCap);
    const getCaption = await CaptionApi.getCaptionbyId(id);
    setCaption(getCaption);
  };
  function getRandomInt(max) {
    if (typeof max !== "number" || max <= 0) {
      throw new Error("Parameter max must be a positive number");
    }
    return Math.floor(Math.random() * max) + 1;
  }
  useEffect(() => {
    getRamdomCaption();
    // randomCaptiion();
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center sm:px-40 px-2">
      <div className="bg-black bg-opacity-40 p-10 text-xl gap-3 rounded-lg text-white mb-36 mt-12">
        <p className="font-custom p-5 text-2xl">{caption.baris1}</p>
        <p className="py-4">{caption.baris2}</p>
        <p className="font-custom py-7">{caption.baris3}</p>
        <p className="">{caption.baris4}</p>
      </div>
      <div className="w-full justify-center flex">
        <button
          onClick={getRamdomCaption}
          className="bg-customGreen hover:bg-customOrange p-5 fixed bottom-8 rounded-lg text-white font-bold"
        >
          Random Caption untuk memperbaiki mood mu
        </button>
      </div>
    </div>
  );
}

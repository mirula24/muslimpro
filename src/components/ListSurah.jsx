import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/AxiosInstanceToEquran";

export default function ListSurah() {
  const [surah, setSurah] = useState([]);
  const navigate = useNavigate();

  const SURAHLIST = async () => {
    try {
      const result = await axiosInstance.get("surat");
      console.log("SURAHLIST result : ", result);
      
      setSurah(result.data.data);
      console.log(surah);

      return result.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
  useEffect(() => {
    SURAHLIST();
  }, []);
  return (
    <div className="flex w-full pt-20 flex-wrap px-2 lg:px-10">
      <div className="flex flex-row justify-center w-full md:text-2xl text-sm   text-white bg-black bg-opacity-15 font-bold">
        <p className="w-1/3 border border-b-2 border-t-0 border-r-0 border-l-0 py-2">
          Nomer surah
        </p>
        <p className="w-1/3  border border-b-2 border-t-0 border-r-0 border-l-0 py-2">
          Nama surah
        </p>
        <p className="w-1/3 border border-b-2 border-t-0 border-r-0 border-l-0 py-2">
          Jumlah ayat
        </p>
      </div>
      {surah.map((datas) => {
        return (
          <div className="flex flex-row justify-center w-full text-2xl py-5 text-white border border-b-2 border-t-0 border-r-0 border-l-0 bg-black bg-opacity-15">
            <button className="w-full flex  " onClick={()=>navigate(`${datas.nomor}`)}>
              <p className="w-1/6 ">{datas.nomor}</p>
              <p className="w-4/6  font-custom">
                 {datas.namaLatin}\{datas.nama}
              </p>
              <p className="w-1/6 ">
                {datas.jumlahAyat}
              </p>
            </button>
          </div>
        );
      })}
    </div>
  );
}

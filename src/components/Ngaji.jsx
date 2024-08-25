import React, { useEffect, useMemo, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../api/AxiosInstanceToEquran";

export default function Ngaji() {
  const { nomor } = useParams();
  const [surah, setSurah] = useState({
    ayat: [],
  });
  const navigate = useNavigate();

  const SURAH = async () => {


    try {
        const result = await axiosInstance.get(`/${nomor}`);
    //   const result = await axios.get(`https://equran.id/api/v2/surat/114`);

      setSurah(result.data.data);
      console.log(surah);

      return;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  useEffect(() => {
    SURAH();
    // console.log(nomor);
    console.log(surah);
  }, [nomor]);

  const nextID = useMemo(() => parseInt(nomor) + 1, [nomor]);
  return (
    <div className="flex w-full pt-20 flex-wrap px-20">
      <div className="w-full justify-center flex flex-row items-center gap-4 bg-customOrange">
        <button onClick={()=>navigate(-1)} className=" text-white font-bold p-5 hover:bg-customOrange hover:text-fuchsia-200 rounded-lg">
          &#8592; Back
          </button>
        <h2 className="text-3xl text-white font-semibold py-10">Surah</h2>
        <p className="text-3xl text-white py-10">{surah.namaLatin}</p>
        <p className="text-3xl text-white py-10 font-custom">{surah.nama}</p>
          <button onClick={() => navigate(`/quran/${nextID}`, { replace: true })} className="font-bold p-5 text-white hover:bg-customOrange hover:text-fuchsia-200 rounded-lg">
            Next &#8594;
          </button>
      </div>
      <div className="w-full flex flex-col">
        {surah.ayat.map((data) => {
          return (
            <div className=" bg-black bg-opacity-20 p-10 flex flex-row justify-between border border-b-4 border-t-0 border-l-0 border-r-0">
              <p className="text-xl text-white w-1/2">{data.teksIndonesia}</p>
              <p className="text-2xl text-white w-1/2 font-custom">{data.teksArab}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

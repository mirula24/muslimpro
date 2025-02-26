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
      const result = await axiosInstance.get(`surat/${nomor}`);
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
  const previosID = useMemo(() => parseInt(nomor) - 1, [nomor]);
  return (
    <div className="flex w-full pt-20 flex-wrap md:px-20 px-2">
      <div className="w-full justify-center flex flex-row items-center gap-4 bg-customOrange">
        <button
          onClick={() => {
            if (parseInt(nomor) === 1) {
              navigate("/quran");
            } else {
              navigate(`/quran/${previosID}`);
            }
          }}
          className=" text-white font-bold p-2 sm:p-5 hover:bg-customOrange hover:text-fuchsia-200 rounded-lg"
        >
          &#8592; Back
        </button>
        <p className="md:text-3xl text-xl text-white py-10">
          {surah.namaLatin}
        </p>
        <p className="md:text-3xl text-xl text-white py-10 font-custom">
          {surah.nama}
        </p>
        <button
          onClick={() => navigate(`/quran/${nextID}`, { replace: true })}
          className="font-bold p-5 text-white hover:bg-customOrange hover:text-fuchsia-200 rounded-lg"
        >
          Next &#8594;
        </button>
        <button
          onClick={() => navigate(`/tafsir/${nomor}`)}
          className="px-20 py-5 bg-customGreen hover:bg-customOrange text-white rounded-lg fixed bottom-10"
        >
          Baca Tafsir Surah {surah.namaLatin}
        </button>
      </div>
      <div className="w-full flex flex-col items-center pb-32">
        {surah.ayat.map((data) => {
          return (
            <div className="w-full bg-black bg-opacity-20 p-2 md:p-10 flex flex-row justify-between border border-b-4 border-t-0 border-l-0 border-r-0 items-center">
              <p className="md:text-xl text-sm text-white w-5/12 ">
                {data.teksIndonesia}
              </p>
              <p className="text-2xl text-white w-6/12 font-custom leading-loose">
                {data.teksArab}
              </p>
              <p className="text-2xl text-white w-1/12 font-custom ">
                {data.nomorAyat}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row w-full">
        <div className="fixed bottom-0 w-1/2"></div>
      </div>
    </div>
  );
}

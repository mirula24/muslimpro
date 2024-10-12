import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../api/AxiosInstanceToEquran";

export default function Tafsir() {
  const { nomor } = useParams();
  const [tafsir, setTafsir] = useState({
    tafsir: [],
  });
  const navigate = useNavigate();

  const TAFSIR = async () => {
    try {
      const result = await axiosInstance.get(`tafsir/${nomor}`);
      setTafsir(result.data.data);
      console.log(tafsir);

      return;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  useEffect(() => {
    TAFSIR();
  }, [nomor]);
  console.log(tafsir);
  console.log(nomor);
  const nextID = useMemo(() => parseInt(nomor) + 1, [nomor]);
  return (
    <div className="w-full flex flex-col">
      <div className="w-full mt-28 ">
        <p className="font-custom text-3xl text-white">
          {tafsir.namaLatin} \ {tafsir.nama}
        </p>
      </div>
      <div className="px-5 lg:px-20">
        <div className=" bg-black bg-opacity-20 py-5  flex flex-row justify-between border border-b-4 border-t-0 border-l-0 border-r-0">
          <p className="text-2xl text-white w-2/12 text-center mx-auto">Ayat</p>
          <p className="text-2xl text-white w-10/12 text-center ">Tafsir</p>
        </div>
      </div>
      {tafsir.tafsir.map((data) => {
        return (
          <div className="w-full px-5 lg:px-20">
            <div
              className=" bg-black bg-opacity-20 py-5 lg:px-10 px-2
          flex flex-row justify-between border border-b-4 border-t-0 
          border-l-0 border-r-0"
            >
              <p className="text-2xl text-white w-2/12 font-custom mx-auto">
                {data.ayat}
              </p>
              <p className="text-xl text-white w-10/12 text-start ">
                {data.teks}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

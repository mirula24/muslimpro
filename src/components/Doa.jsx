import React, { useEffect, useState } from "react";
import axiosInstance from "../api/AxiosInstance";
import { useNavigate } from "react-router-dom";

export default function Doa() {
  const [doadoa, setDoadoa] = useState([]);
const navigate = useNavigate();
  const DOA = async () => {
    try {
      const result = await axiosInstance.get("/doa");
      setDoadoa(result.data);
      console.log(doadoa);

      return result.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  useEffect(() => {
    DOA();
  }, []);

  return (
    <div className="flex w-full pt-20 gap-5 flex-wrap px-16">
      {doadoa.map((datas) => {
        return (
          <button onClick={()=>navigate(`${datas.id}`)} className="flex text-wrap w-[200px] bg-red-50 h-[100px] items-center justify-center mx-auto rounded-lg
          hover:w-[210px] hover:h-[110px] duration-200 ">
            <h2 className="font-bold">{datas.doa}</h2>
          </button>
        );
      })}
    </div>
  );
}

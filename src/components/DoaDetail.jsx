import React, { useEffect, useMemo, useState } from "react";
import { replace, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../api/AxiosInstance";

export default function DoaDetail() {
  const { id } = useParams();
  const [doa, setDoa] = useState([]);
  const navigate = useNavigate();
  const DOA = async () => {
    console.log("text:  ", id);
    try {
      const result = await axiosInstance.get(`doa/${id}`);
      setDoa(result.data);
      console.log(doa);

      return result.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  useEffect(() => {
    DOA();
    console.log(id);
  }, [id]);


  const nextID =  useMemo(() => parseInt(id) + 1, [id]);
  

  return (
      <div className="flex w-full h-screen pt-10 gap-5 flex-col px-16 justify-center ">
        <div className="bg-white bg-opacity-30 rounded-lg">
          <h2 className="font-bold text-xl py-10">{doa.doa}</h2>
          <h2 className="font-bold text-2xl pb-10 font-custom">{doa.ayat}</h2>
          <h2 className="font-bold pb-4">{doa.latin}</h2>
          <h2 className="font-bold pb-10">{doa.artinya}</h2>
        </div>
        <div className="w-full items-center">
          <button onClick={()=>navigate(-1)} className="font-bold p-5 hover:bg-customOrange hover:text-fuchsia-200 rounded-lg">
          &#8592; Back
          </button>
          <button onClick={() => navigate(`/doa/${nextID}`, { replace: true })} className="font-bold p-5 hover:bg-customOrange hover:text-fuchsia-200 rounded-lg">
            Next &#8594;
          </button>
        </div>
      </div>
  );
}

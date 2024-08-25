import React from "react";
import icon from "../assets/icon2.svg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
  return (
    <div className="w-full fixed top-10 left-0 flex flex-row justify-center items-center font-bold lg:text-2xl sm:xl">
      <div className="bg-customOrange m-[-20px] gap-0 lg:gap-4 flex  px-2 pr-12 rounded-l-xl lg:w-[340px] justify-around">
        <button onClick={()=>navigate("")} className="hover:text-white hover:bg-hoverGreen p-2 rounded-lg duration-200">Beranda</button>
        <button onClick={
          ()=>{navigate("/quran")}
        } className="hover:text-white hover:bg-hoverGreen p-2 rounded-lg duration-200">Al-Qur'an</button>
      </div>
      <div className="p-2 bg-customOrange rounded-full z-1000 fixed">
        <img src={icon} alt="" className="w-[50px]" />
      </div>
      <div className="bg-customOrange m-[-20px] gap-4 flex px-2 pl-12 rounded-r-xl lg:w-[340px] justify-around">
        <button onClick={
          ()=>{navigate("/doa")}
        }
        className="hover:text-white hover:bg-hoverGreen p-2 rounded-lg duration-200">Doa - doa</button>
        <button onClick={
          ()=>{navigate("/kuis")}} className="hover:text-white hover:bg-hoverGreen p-2 rounded-lg duration-200">Kuis Islami</button>
      </div>
    </div>
  );
}

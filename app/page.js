"use client"
import Links from "@/components/links";
import Navbar from "@/components/navbar";
import { useState } from "react";
export default function Home() {
  const [light, setlight] = useState("0%");
  const [gray, setgray] = useState("#4b5563")
  const [white, setwhite] = useState("white")
  const handlelight = () => {
    setlight("0%");
    setwhite("white");
    setgray("#4b5563");
  }
  const handledark = () => {
    setlight("50%");
    setwhite("#4b5563");
    setgray("white");
  }
  return (
    <>
      <div className="absolute -z-10 bg-[#05081f] w-full h-full"></div>
      <Navbar />
      <div className="text-4xl w-fit mx-auto pt-8 font-semibold bg-gradient-to-r from-[#fe006d] to-[#023eff] bg-clip-text text-transparent">Shorten Your Loooong Links :) </div>
      <p className="w-1/3 mt-4 text-md mx-auto text-center">Linkio is an efficient and easy-to-use URL shortening service that streamlines your online experiences</p>
      <div className="flex items-center justify-center gap-9  mt-4">
        
      <div className="border-2 border-gray-600 w-[30%] h-11 pl-3 rounded-full flex items-center justify-between mt-2" >
        <input type="text" placeholder="Enter Link Here" className="bg-transparent outline-0 text-base w-full" />
      </div>
      <div className="border-2 border-gray-600 w-[30%] h-11 pl-3 rounded-full  flex items-center justify-between mt-2" >
        <input type="text" placeholder="Enter keyword Here" className="bg-transparent outline-0 text-base w-full" />
      </div>
      </div>
      <div className="bg-[#0700ff] py-2 rounded-full px-4 font-semibold text-md my-4 w-fit cursor-pointer mx-auto hover:shadow-[#0700ff] shadow-black transition-all shadow-md">Shorten Now!</div>
      <div className="flex  justify-between border-2 border-gray-600 w-52 rounded-full absolute  rotate-90 -right-16">
        <span style={{ left: light }} className="bg-[#023eff] absolute w-1/2 h-full transition-all duration-200 -z-20 rounded-full blue-span"></span>
        <div onClick={handlelight} className="light cursor-pointer w-1/2 flex items-center gap-3 px-2 py-2">
          <span style={{ color: white }} className="text-white font-semibold">Light</span>

          <span style={{ color: white }} className="material-symbols-outlined text-white">
            light_mode
          </span>
        </div>
        <div onClick={handledark} className="dark cursor-pointer w-1/2 flex items-center justify-end gap-3 px-2 py-2">
          <span style={{ color: gray }} className="text-gray-600 font-semibold">Dark</span>
          <span style={{ color: gray }} className="material-symbols-outlined">
            dark_mode
          </span>
        </div>
      </div>
      <Links />
    </>
  );
}

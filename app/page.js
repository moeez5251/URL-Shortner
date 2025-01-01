"use client"
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import { Client, Databases, ID } from 'appwrite';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import Link from "next/link";
export default function Home() {
  const client = new Client();
  client.setProject(process.env.NEXT_PUBLIC_PROJECT)
  const databases = new Databases(client);
  const [light, setlight] = useState("0%");
  const [gray, setgray] = useState("#4b5563")
  const [white, setwhite] = useState("white")
  const [link, setlink] = useState({
    value: "",
    stat: false
  })
  const [error, seterror] = useState(false)
  const [inputs, setinputs] = useState({
    link: "",
    keyword: ""
  })
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".fixed").style.top = "-200%";
    }, 2000);

    if (localStorage.getItem("theme") === "dark") {
      document.querySelector("html").classList.add("dark")
      setlight("50%");
      setwhite("#4b5563");
      setgray("white");
    }
    else if (localStorage.getItem("theme") === "light") {
      document.querySelector("html").classList.remove("dark")
      setlight("0%");
      setwhite("white");
      setgray("#4b5563");
    }
    else {
      localStorage.setItem("theme", "light");
    }
    return () => {

    }
  }, [])

  const handlelight = () => {
    if (document.querySelector("html").classList.contains("dark")) {
      localStorage.removeItem("theme");
      localStorage.setItem("theme", "light")
      document.querySelector("html").classList.remove("dark")
    }
    setlight("0%");
    setwhite("white");
    setgray("#4b5563");
  }
  const handledark = () => {
    localStorage.removeItem("theme");
    localStorage.setItem("theme", "dark");
    document.querySelector("html").classList.add("dark")
    setlight("50%");
    setwhite("#4b5563");
    setgray("white");
  }
  const handlesubmission = async () => {
    document.querySelector(".btn").disabled = true;
    if (inputs.link === "" || inputs.keyword === "") {
      document.querySelector(".btn").disabled = false;
      return
    }
    try {
      new URL(inputs.link);
    } catch (e) {
      document.querySelector(".btn").disabled = false;
      toast.error("Enter a valid URL", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    const e = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DB_ID,
      process.env.NEXT_PUBLIC_COLLECTION,
    )
    for (const element of e.documents) {
      if (element.keyword === inputs.keyword) {
        document.querySelector(".btn").disabled = false;
        seterror(true)
        setTimeout(() => {
          seterror(false);
        }, 4000);
        return
      }

    }
    databases.createDocument(
      process.env.NEXT_PUBLIC_DB_ID,
      process.env.NEXT_PUBLIC_COLLECTION,
      ID.unique(),
      { URL: inputs.link, keyword: inputs.keyword }

    ).then(() => {
      setlink({
        value: inputs.keyword,
        stat: true
      })
      setinputs({
        link: "",
        keyword: ""
      })
      document.querySelector(".btn").disabled = false;

    })
  }
  const handlechange = (e) => {
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
      <div className="fixed w-full top-0 duration-300 transition-all h-full bg-[#e0dcff] z-20 flex items-center justify-center">
        <div className="flex-col gap-4 w-full flex items-center justify-center">
          <div
            className="w-20 h-20 border-4 border-transparent text-[#023eff] text-4xl animate-spin flex items-center justify-center border-t-[#023eff] rounded-full"
          >
            <div
              className="w-16 h-16 border-4 border-transparent text-[#fe006d] text-2xl animate-spin flex items-center justify-center border-t-[#fe006d] rounded-full"
            ></div>
          </div>
        </div>

      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="absolute -z-10  w-full h-full bg-[#e0dcff] dark:bg-[#05081f]"></div>
      <Navbar />
      <div className="sm:text-4xl text-2xl w-fit mx-auto pt-8 font-semibold bg-gradient-to-r from-[#fe006d] to-[#023eff] bg-clip-text text-transparent">Shorten Your Loooong Links :) </div>
      <p className="sm:w-1/3 w-[80%] mt-4 text-md mx-auto text-center text-blue-800 font-bold dark:text-white dark:font-normal">Linkio is an efficient and easy-to-use URL shortening service that streamlines your online experiences</p>
      <div className="flex items-center sm:flex-row flex-col  justify-center gap-9  mt-4">

        <div className="border-2 border-gray-600 w-[70%] sm:w-[30%] h-11 pl-5 rounded-full flex items-center justify-between mt-2 text-black dark:text-white " >
          <input onChange={handlechange} value={inputs.link} name="link" type="text" placeholder="Enter Link Here" className="bg-transparent outline-0 text-base w-full placeholder:text-black placeholder:dark:text-gray-500" />
        </div>
        <div className="border-2 border-gray-600 w-[70%] sm:w-[30%] h-11 pl-5 rounded-full  flex items-center justify-between mt-2 text-black dark:text-white" >
          <input onChange={handlechange} value={inputs.keyword} name="keyword" type="text" placeholder="Enter keyword Here" className="bg-transparent outline-0 text-base w-full placeholder:text-black placeholder:dark:text-gray-500 placeholder:font-thin" />
        </div>
      </div>
      <div className="w-full text-center">

        <button onClick={handlesubmission} className="btn bg-[#0700ff] py-2 rounded-full px-4 font-semibold text-md my-10  cursor-pointer hover:shadow-[#0700ff] shadow-black transition-all shadow-md disabled:bg-[#0d0b57] text-white">Shorten Now!</button>
      </div>
      <div className="flex  justify-between border-2 border-gray-600 w-52 top-1/2 rounded-full absolute  rotate-90 -right-20 sm:-right-16">
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
      {error && <div className="text-center mt-4 text-red-600">Choose different keyword</div>}
      {link.stat &&
        <div className="w-full text-center  flex items-center flex-col sm:flex-row justify-center gap-2 ">
          <h2 className="font-bold text-red-600 dark:text-green-400 text-sm sm:text-lg">Your Shorten Link is</h2> 
          <div className="flex items-center gap-2">

          <Link className="link font-normal underline text-amber-700 dark:text-yellow-400" target="_blank" href={"https://linkio.netlify.app/" + link.value}>{"https://linkio.netlify.app/" + link.value}</Link>
          <span onClick={() => {
            navigator.clipboard.writeText(document.querySelector(".link").innerHTML)
          }} title="copy" className="material-symbols-outlined cursor-pointer text-gray-500  dark:text-white">
            content_copy
          </span>
            </div>
        </div>
        || <span className="font-bold text-xl mt-7 text-center w-full block text-red-500 dark:text-gray-500">Your link Appear here</span>}
    </>
  );
}
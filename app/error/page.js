"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const error = () => {
    useEffect(() => {

        if (localStorage.getItem("theme") === "dark") {
            document.querySelector("html").classList.add("dark")

        }
        else if (localStorage.getItem("theme") === "light") {
            document.querySelector("html").classList.remove("dark")

        }
        else {
            localStorage.setItem("theme", "light");
        }
        return () => {

        }
    }, [])
    return (
        <>
            <div className='flex justify-center items-center h-screen flex-col bg-[#e0dcff] dark:bg-[#05081f]'>
                <Image priority={true} className='dark:hue-rotate-30' src="/not-found.png" alt="Not found" width={500} height={500} loading='eager' />
                <span className='font-bold text-xl text-black dark:text-white'>Go Back to <Link className='text-red-700 underline dark:text-yellow-500' href="/">Home</Link></span>
            </div>
        </>
    )
}

export default error
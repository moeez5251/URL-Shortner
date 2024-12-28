"use client"
import React, { useState } from 'react'
const Links = () => {
    const date = new Date();
    const [websites, setwebsites] = useState([
        { link: "https://www.google.com", original: "https://www.google.com", qr: "hi", date: date.toDateString() },
        { link: "https://www.google.com", original: "https://www.google.com", qr: "hi", date: date.toDateString() },
    ])
    return (
        <>
            <table className='w-3/4 mx-auto mt-10  rounded-md overflow-hidden'>
                <thead className='bg-gray-900 overflow-hidden'>
                    <tr >
                        <th className='py-3  w-[25%] text-center'>Short Link</th>
                        <th className='py-3 w-[25%] text-center'>Original Link</th>
                        <th className='py-3 w-[25%] text-center'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {websites.map((e, key) => {
                        return (
                            <tr key={key}>
                                <td className='py-3  px-4  text-center bg-gray-800 flex w-full gap-2'>
                                    <span>{e.link}</span>
                                    <span className="material-symbols-outlined cursor-pointer" title='copy Link' onClick={() => navigator.clipboard.writeText(e.link)}>
                                        content_copy
                                    </span>
                                </td>
                                <td className='py-3 w-[25%] text-center px-4 bg-gray-800'>{e.original}</td>

                                <td className='py-3 w-[25%] text-center px-4 bg-gray-800'>{e.date}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Links
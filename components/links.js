"use client"
import React, { useState ,useEffect} from 'react'
import { Client, Databases} from 'appwrite';
import Link from 'next/link'
const Links = () => {
    const client = new Client();
    client.setProject(process.env.NEXT_PUBLIC_PROJECT)
    const databases = new Databases(client);
    const [websites, setwebsites] = useState([])
    useEffect(() => {
        databases.listDocuments(
            process.env.NEXT_PUBLIC_DB_ID,
            process.env.NEXT_PUBLIC_COLLECTION,
            
        ).then((response) => {
            setwebsites(response.documents)
        })
    }, [])
    
    
    return (
        <>
            <table className='w-3/4 mx-auto mt-10 rounded-md overflow-y-scroll block  h-[200px] '>
                <thead className='bg-gray-900 overflow-hidden'>
                    <tr >
                        <th className='py-3  w-[25%] text-center'>Short Link</th>
                        <th className='py-3 w-[25%] text-center'>Original Link</th>
                        <th className='py-3 w-[25%] text-center'>Clicks</th>
                        <th className='py-3 w-[25%] text-center'>Date</th>
                    </tr>
                </thead>
                <tbody >
                    {websites.map((e, key) => {
                        return (
                            <tr key={key}>
                                <td className='py-3  px-4  text-center bg-gray-800 flex justify-center w-full gap-2'>
                                    <Link href={""}  className='cursor-pointer'>{e.keyword}</Link >
                                    <span className="material-symbols-outlined cursor-pointer" title='copy Link' onClick={() => navigator.clipboard.writeText(e.keyword)}>
                                        content_copy
                                    </span>
                                </td>
                                <td  className='py-3 w-[25%]   text-center px-4 bg-gray-800'>
                                    <Link className='block h-[20px]  overflow-y-auto overflow-x-clip' href={""}>{e.URL}</Link>
                                    </td>
                                <td className='py-3 w-[25%] text-center px-4 bg-gray-800'>{e.clicks}</td>

                                <td className='py-3 w-[25%] text-center px-4 bg-gray-800'>{e.Date}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Links
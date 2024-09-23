import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Card from './Card';

function TopRest() {
    const [data, setData] = useState([])

    const fetTopRest = async () => {
        const res = await fetch("http://192.168.1.23:5000/top-restaurant-chains")
        const data = await res.json()
        setData(data)
    }

    useEffect(() => { fetTopRest()}, [])

    return (
        <>
            <div className='max-w-[1300px] mx-auto'>
                <div className='flex items-center justify-between my-2'>
                    <div className='text-[25px] font-bold'>Top restaurant chains in Mumbai</div>
                    <div className='flex'>
                        <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' ><FaArrowLeft /></div>
                        <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' ><FaArrowRight /></div>
                    </div>

                </div>
                <div className='flex gap-3 overflow-hidden'>
                    {
                        data.map((item,index)=> {
                            return (
                                <Card {...item} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TopRest

import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
function Category() {
    const [categories, setCategories] = useState([])
    const [pracentage, setPracentage] = useState(0)
    

    const fetchCategory = async () => {
        const res = await fetch("http://192.168.1.23:5000/categories");
        const data = await res.json();
        setCategories(data)
    }
    useEffect(() => { fetchCategory() }, [])
    return (
        <div className='max-w-[1300px] mx-auto'>
            <div className='flex items-center justify-between my-2'>
                <div className='text-[25px] font-bold'>What's on your mind?</div>
                <div className='flex'>
                    <div onClick={() => (pracentage !== 0 ? setPracentage(pracentage - 1) : pracentage)} className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' style={{ opacity: pracentage === 0 ? 0.5 : 1 }}><FaArrowLeft /></div>
                    <div onClick={() => (pracentage <= (categories.length - 9) ? setPracentage(pracentage + 1) : pracentage)} className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' style={{ opacity: pracentage >= (categories.length - 9)  ? 0.5 : 1 }}><FaArrowRight /></div>
                </div>
            </div>
            <div className='flex overflow-hidden relative'>
                <div className='w-[20px] h-[20px] bg-red-400'  ></div>
                {
                    categories.map((item, index) => {
                        return (
                            <div
                                style={{
                                    transform: `translateX(-${pracentage * 100}%)`
                                }} key={index} className='w-[150px] shrink-0 flex-grow duration-500 '>
                                <img src={"http://192.168.1.23:5000/images/" + item.image} alt={item.image} />
                            </div>
                        )
                    })
                }
                <div className='w-[20px] h-[20px] bg-red-400 ' ></div>
            </div>
        </div>
    )
}

export default Category

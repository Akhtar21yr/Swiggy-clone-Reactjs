import React,{useState,useEffect} from 'react'
import Card from './Card'

function OnlineDelivery() {
    const [data, setData] = useState([])
    console.log(data)

    const fetTopRest = async () => {
        const res = await fetch("http://192.168.1.23:5000/top-restaurant-chains")
        const data = await res.json()
        setData(data)
    }

    useEffect(() => { fetTopRest()}, [])
    return (
        <div className='max-w-[1300px] mx-auto'>
            <div className='flex items-center justify-between my-2'>
                <div className='text-[25px] font-bold'>Restaurants with online food delivery in Mumbai</div>
            </div>
            <div className='md:grid grid-cols-4 gap-2'>
            {
                        data.map((item,index)=> {
                            return (
                                <Card  {...item} key={index}/>
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default OnlineDelivery

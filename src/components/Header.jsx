import React, { useState } from 'react'
import { GoChevronDown } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { PiSignIn } from "react-icons/pi";
import { LuShoppingCart } from "react-icons/lu";
import { FaBagShopping } from "react-icons/fa6";

function Header() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div 
                onClick={()=>setToggle(!toggle)}
                className="black-overlay w-full h-full duration-500 fixed top-0 left-0 z-10"
                style={{ 
                    opacity: toggle ? 1 : 0, 
                    visibility: toggle ? 'visible' : 'hidden', 
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    transition: 'opacity 0.2s ease',
                }}
            >
                <div 
                    onClick={(e) => e.stopPropagation()}
                    className=" w-[500px] h-full absolute bg-white p-5"
                    style={{ 
                        left: toggle ? '0%' : '-100%', 
                        transition: 'left 0.3s ease'
                    }}
                >
                    <h1 className="text-2xl">Sidebar Content</h1>
                    <p>This is the sidebar content that slides in and out when you click the chevron icon.</p>
                </div>
            </div>


            <header className='sticky top-0 p-[15px] shadow-xl bg-white z-[9999] text-[#686b78] '>
                <div className='max-w-[1300px] mx-auto flex items-center'>
                    <div className='w-[100px]'>
                        <img className='w-full' src="src/assets/Swiggy-emblem.png" alt="Swiggy emblem" />
                    </div>
                    <div>
                        <span className='font-bold border-b-[2px] border-black'>Mumbai</span>, Maharastra, India
                        <GoChevronDown 
                            onClick={() => setToggle(!toggle)} 
                            className='inline font-bold text-[1.2rem] text-[#fc8019] ml-1 cursor-pointer' 
                        />
                    </div>
                    <nav className='hidden md:flex list-none gap-10  ml-auto text-[18px] font-semibold' >
                        <li className='hover:text-[#fc8019]'><FaBagShopping className='inline mx-4 '  />Swiggy Corporate</li>
                        <li className='hover:text-[#fc8019]'><CiSearch className='inline mx-2 ' />Search</li>
                        <li className='hover:text-[#fc8019]'><CiDiscount1 className='inline mx-2' />Offers <sup>New</sup></li>
                        <li className='hover:text-[#fc8019]'><IoHelpBuoyOutline className='inline mx-2' />Help</li>
                        <li className='hover:text-[#fc8019]'><PiSignIn className='inline mx-2' /> Sign In</li>
                        <li className='hover:text-[#fc8019]'><LuShoppingCart className='inline mx-2' /> Cart <sup>0</sup></li>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;

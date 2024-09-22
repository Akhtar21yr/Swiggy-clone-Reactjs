import React, { useState } from 'react'
import { GoChevronDown } from "react-icons/go";

function Header() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            {/* Overlay */}
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

            {/* Header */}
            <header className='p-[15px] shadow-xl text-[#686b78]'>
                <div className='max-w-[1200px] mx-auto flex items-center'>
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
                </div>
            </header>
        </>
    )
}

export default Header;

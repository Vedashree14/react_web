import React, { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    {/*using react icons for this. */}
    const handleNav = () => {
        setNav(!nav)           /*set nav to its opposite state everytime  */
        if(!nav){
            /*to to the background scroll even when navbar is there, we will access the body of document html, and use overflow properly to make it hidden */
            document.body.style.overflow = 'hidden'
        } else{
            document.body.style.overflow ='scroll'
        }
    }

    return (
        <div className='fixed top-0 w-full flex justify-between p-4 items-center z-30'>
            <h1 className='text-white font-bold text-2xl z-20'>Experiences</h1>
            <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />

            <div className={
                nav
                ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10 flex'  // nav is true
                : 'fixed top-0 left-[-100%] w-full h-screen bg-black/90 px-4 py-7 flex-col z-10 flex transition-all duration-300 ease-in' // nav is false
            }>
                {/* {nav ? :'our nav style':''} means if nav true then show our navstyle as full screen else show it on top. */}
                <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
                    <li className='font-bold text-3xl p-8'>Destinations</li>
                    <li className='font-bold text-3xl p-8'>Home</li>
                    <li className='font-bold text-3xl p-8'>Reservations</li>
                    <li className='font-bold text-3xl p-8'>Amenities</li>
                    <li className='font-bold text-3xl p-8'>Rooms</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar

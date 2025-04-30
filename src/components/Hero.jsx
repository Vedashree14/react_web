import React from 'react'
/*Our Hero main component*/ 
const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img 
            className='top-0 left-0 w-full h-screen object-cover' 
            src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt='/'
        />
        <div className='bg-black/40 absolute top-0 left-0 w-full h-screen'/>   {/*self closing div, this div is to add overlay- a dark overlay on the image. */}
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            {/*md-> media query for medium break point*/}
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <p>All Inclusive</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches and Getaways</h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
                    Maldives is famous for its elite extravagance resorts and white sand sea shores. 
                    It is the ideal adventure destination of the world and has awesome marine life.
                </p>
                <button className='bg-white/70 text-black'>Reserve Now</button>
                {/*styling of this button is done in layerbase buttons in index.css */}
            </div>
        </div>
    </div>
  )
}

export default Hero  
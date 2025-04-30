import React from 'react'

const Plan = () => {
  return (
    /*below line to make sure all images r on one side and text on the right, 2 cols one for grid one for text*/ 
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            {/*our left part where there is image grid
            rowspan-> how many rows an image spans (make sure left total = right total span.) */}
            <img className='row-span-3 object-cover w-full h-full p-2' src = "https://images.pexels.com/photos/2531237/pexels-photo-2531237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='/'></img>
            <img className='row-span-2 object-cover w-full h-full p-2' src = "https://images.pexels.com/photos/1005456/pexels-photo-1005456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='/'></img>
            <img className='row-span-2 object-cover w-full h-full p-2' src = "https://images.pexels.com/photos/2058333/pexels-photo-2058333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='/'></img>
            <img className='row-span-3 object-cover w-full h-full p-2' src = "https://images.pexels.com/photos/240513/pexels-photo-240513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='/'></img>
            <img className='row-span-2 object-cover w-full h-full p-2' src = "https://images.pexels.com/photos/221455/pexels-photo-221455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='/'></img>
        </div>
            {/*our right part where there is text */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
            <p className='text-2xl py-6'>The idyllic islands of Maldives with its perfect surf conditions makes it the ideal destination for surf enthusiasts. The spots of north, south and central atolls of Maldives are highly popular with beginner, intermediate and advanced surfers</p>
            <p className='pb-6'>The Maldives is blessed with pristine beaches and enchanting waves that invite surfers from around all over the world. As the lowest lying country on Earth, the Maldives' diverse ecosystems are fragile, especially in the face of a heating world. The surfing community across the globe are one of the most vocal ambassadors of the ocean.</p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan
import React, {useState} from 'react'
/*import icons for left and right arrows */
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
/*for the dot buttons to go to a slide */
import {RxDotFilled} from 'react-icons/rx'

const ImageSlider = () => {
    /*slides inside jsx is just an array of objects with image urls and their respective titles. */
    const slides = [
        {
            url : 'https://plus.unsplash.com/premium_photo-1668143363099-1d9e04d4a3f7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Crabs',
        },
        {
            url : 'https://images.pexels.com/photos/30225319/pexels-photo-30225319/free-photo-of-fresh-tropical-fruit-platter-in-maldives.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Exotic Fruits',
        },
        {
            url : 'https://images.pexels.com/photos/29346178/pexels-photo-29346178/free-photo-of-delicious-club-sandwich-with-french-fries.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Multi-Cuisine',
        },
        {
            url : 'https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Prawns',
        },
    
    ];

    /*to loop through image slides*/
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex ===0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex);
    }

    /*to go to a certain slide */
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
     
  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'> {/*group added so if group ie, parent div is hovered only then the the bg-black shows */}
        {/*use style to display bg image setting url as ith slide.url by accessing array slide object with $ */}
        <div 
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
        </div>
        {/*Left Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/*Left Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>

        {/*To go to any slide. */}
        <div className = 'flex top-4 justify-center py-2'>
            {/*Mapping through slide and its indexes, react strongly reccomends to use a key */}    
            {slides.map((slide, slideIndex)=> (
                <div className='text-2xl cursor-pointer' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                <RxDotFilled />
                </div>
            ))}

        </div>

    </div>
  )
}

export default ImageSlider 
import React from 'react'
import Slider from 'react-slick';
import './Carousel.css';
import industries from '../data/industryData'

function IndustrySlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true, // Optional: centers the active item
        focusOnSelect: true, // Optional: allows selecting a slide
      };



  return (
    <div>
        <Slider {...settings}>
            {
                industries.map((industry,index)=>{
                    return(
                        <div className='flex items-center justify-center border-4 rounded-full p-1 border-blue-600 h-[200px] m-2 bg-blue-200 text-black shadow-[0px_0px_5px_gray'>
                            <p className='text-[60px] w-fit mx-auto mt-10'>{industry.icon}</p>
                            <p className='w-fit mx-auto text-sm  font-bold text-center overflow-clip'>{industry.name}</p>
                        </div>
                    )
                })
            }

        </Slider>
    </div>
  )
}

export default IndustrySlider
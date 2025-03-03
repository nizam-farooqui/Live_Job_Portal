import { useTypewriter, Cursor } from 'react-simple-typewriter'
import React, { useState, useEffect } from 'react';

import heroImage from '../assets/heroImage.png'
import IndustrySlider from '../components/IndustrySlider';
import Counter from '../components/Counter';



const Home = () => {
  
  const [text] = useTypewriter({
    words: [" Find your dream job", " Unlock your career", " Craft your career"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500
  })


  return (
    <div className="min-h-screen bg-black text-white overflow-y-scroll scrollbar scrollbar-thumb-gray-600 scrollbar-track-gray-800">



      <div className='flex justify-between'>
        <div className="flex basis-1/2  flex-col items-center justify-center h-[80vh] text-center pl-[60px]">
          <h1 className="text-6xl font-bold mb-4"><span className='text-black'>.</span>{text}</h1>
          <p className="text-xl mb-8">Join thousands of companies and candidates to find the perfect match.</p>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search jobs..."
              className="px-4 py-2 rounded-lg bg-[rgb(249,249,249)] text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Location..."
              className="px-4 py-2 rounded-lg bg-[rgb(249,249,249)] text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Search
            </button>
          </div>
        </div>

        
        <div className='basis-1/2'>
          <img className='scale-x-[-1] w-full' src={heroImage} alt="Hero Image" />
          
        </div>

      </div>

      <div className="px-20 my-8  flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6 text-center">Accuracy Metrics</h2>
        <div className='flex  flex-row gap-4 '>

        <Counter targetValue='1400' name='Succes Rate' />
        <Counter targetValue='1200' name='Offers' />
        <Counter targetValue='1500' name='Test Rate' />
        </div>
      </div>

      {/* Industry Carousel Section */}
      <div className="px-20 my-8">
        <h2 className="text-4xl font-bold mb-8 text-center">Industry Specializations</h2>
        <IndustrySlider/>
      </div>



    </div>
  );
};

export default Home;

import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { ReactTyped } from "react-typed";
import House from '../assets/home.jpeg'


const Home = () => {
  return (
    <div className='all'>
            <Navbar />
        {/* First section */}
        <div className='text-white background-section'>
  <div className='max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <div className='text-background'>
          <p className='text-gray-300 font-bold p-2 text-shadow'>
              A HOME IS THE PLACE TO START YOUR STORY
          </p>
      </div>
      <div className='flex justify-center items-center text-background'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4 text-shadow'>
              flexible financial plans for
          </p>
          <ReactTyped className='text-green-400 md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-shadow'
          strings={['HOMES', 'LAND', 'SPACES']}
          typeSpeed={120}
          backSpeed={140}
          loop
          />
      </div>
    <div className='text-background'>
        <p className='md:text-2xl text-xl font-bold text-gray-500 text-shadow'>Take a look at the variety of properties we have for you.</p>
    </div>
    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
  </div>
</div>
  {/* second section */}
  <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={House} alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Welcome to Real estate - Your Gateway to Effortless Living</h1>
          <p>
            Finding your perfect home should be an exciting journey, not a hassle. Introducing Real estate, the revolutionary app that transforms the way you search, secure, and settle into your dream space.
          </p>
        </div>
      </div>
    </div>
    {/* third section */}
    <div className='w-full bg-green-300 text-black py-16 px-4 text-center md:text-6xl sm:text-3xl text-3xl'>
        <p>Become part of our mission and invest in<b> Real Estate</b></p>
    </div>
  <Footer />  
  </div>
  );
};

export default Home
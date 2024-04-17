import React from 'react';
import house1 from '../assets/home1.jpg';
import house2 from '../assets/home2.jpeg';
import house3 from '../assets/homes3.jpg';
import house4 from '../assets/bnb.jpg';
import house5 from '../assets/mansion.jpg';
import house6 from '../assets/beach-house.jpg';
import Navbar from './Navbar';
import Footer from './Footer';

const Properties = () => {
  return (
    <>
    <Navbar />
    <h3 className='bg-gray-700 text-center text-white font-bold md:text-4xl sm:text-3xl pt-3 pb-2'>Properties</h3>

    {/* first property */}
    <div className="grid-container bg-gray-700">
        {/* first property */}
        <div className=' cadii hover:scale-110 duration-700'> {/* hover:scale-90 duration-700 */}
        <img className=' imagee cursor-pointer' src={house1} alt='name'/>
        <h3 className='text-center font-normal md:text-2xl sm:text-1xl'>Luxury Apartment</h3>
        <p className='text-center font-light'>No place like home.</p>
        <p className='text-center p-2 font-extrabold'>Kshs: 31m</p><br></br>

        {/* <button className='view'>View</button> */}
        <br></br><br></br>

    </div>

    {/* second property */}
        <div className=' cadii hover:scale-110 duration-700'> {/* hover:scale-90 duration-700 */}
        <img className=' imagee cursor-pointer' src={house2} alt='name'/>
        <h3 className='text-center font-normal md:text-2xl sm:text-1xl'>Classic spacious home</h3>
        <p className='text-center font-light'>4 bedroom house.</p>
        <p className='text-center p-2 font-extrabold'>Kshs: 17m</p><br></br>

        {/* <button className='view'>View</button> */}
        <br></br><br></br>

    </div>

    {/* third section */}
        <div className=' cadii hover:scale-110 duration-700'> {/* hover:scale-90 duration-700 */}
        <img className=' imagee cursor-pointer' src={house3} alt='name'/>
        <h3 className='text-center font-normal md:text-2xl sm:text-1xl'>Modern houses</h3>
        <p className='text-center font-light'>A One bedroom apartment.</p>
        <p className='text-center p-2 font-extrabold'>Kshs: 2m</p><br></br>

        {/* <button className='view'>View</button> */}
        <br></br><br></br>

        </div>

    {/* fourth section */}
    <div className=' cadii hover:scale-110 duration-700'> {/* hover:scale-90 duration-700 */}
        <img className=' imagee cursor-pointer' src={house4} alt='name'/>
        <h3 className='text-center font-normal md:text-2xl sm:text-1xl'>Air BnB</h3>
        <p className='text-center font-light'>Can accomodate for many.</p>
        <p className='text-center p-2 font-extrabold'>Kshs: 30m</p><br></br>

        {/* <button className='view'>View</button> */}
        <br></br><br></br>

        </div>

    {/* fifth section */}
    <div className=' cadii hover:scale-110 duration-700'> {/* hover:scale-90 duration-700 */}
        <img className=' imagee cursor-pointer' src={house5} alt='name'/>
        <h3 className='text-center font-normal md:text-2xl sm:text-1xl'>Mansion monster</h3>
        <p className='text-center font-light'>The luxury way of living.</p>
        <p className='text-center p-2 font-extrabold'>Kshs: 50m</p><br></br>

        {/* <button className='view'>View</button> */}
        <br></br><br></br>

        </div>

    {/* sixth section */}
    <div className=' cadii hover:scale-110 duration-700'> {/* hover:scale-90 duration-700 */}
        <img className=' imagee cursor-pointer' src={house6} alt='name'/>
        <h3 className='text-center font-normal md:text-2xl sm:text-1xl'>Beach-house</h3>
        <p className='text-center font-light'>Mostly for vacations and holidays.</p>
        <p className='text-center p-2 font-extrabold'>Kshs: 78m</p><br></br>

        {/* <button className='view'>View</button> */}
        <br></br><br></br>

        </div>

    </div>

    <Footer />
    </>    
  )
}

export default Properties
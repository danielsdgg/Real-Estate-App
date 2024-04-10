import React from 'react';
import house1 from '../assets/home1.jpg';
import house2 from '../assets/home2.jpeg';
import house3 from '../assets/homes3.jpg'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Properties = () => {
  return (
    <>
    <Navbar />
    <h3 className='text-center text-white font-bold md:text-4xl sm:text-3xl underline pt-3 pb-2'>Properties</h3>

    {/* first property */}
    <div className="grid-container">
        {/* first property */}
        <div className=' cadii hover:scale-110 duration-700'> {/* hover:scale-90 duration-700 */}
        <Link to={`/`}><img className=' imagee cursor-pointer' src={house1} alt='name'/></Link>
        <h3 className='text-center font-normal md:text-2xl sm:text-1xl'>Luxury Apartment</h3>
        <p className='text-center font-light'>No place like home.</p>
        <p className='text-center p-2 font-extrabold'>Kshs: 31m</p><br></br>

        <button className='view'>View</button>
        <br></br><br></br>

    </div>

    {/* second property */}
        <div className=' cadii hover:scale-110 duration-700'> {/* hover:scale-90 duration-700 */}
        <Link to={`/`}><img className=' imagee cursor-pointer' src={house2} alt='name'/></Link>
        <h3 className='text-center font-normal md:text-2xl sm:text-1xl'>Spacious home</h3>
        <p className='text-center font-light'>4 bedroom house available.</p>
        <p className='text-center p-2 font-extrabold'>Kshs: 17m</p><br></br>

        <button className='view'>View</button>
        <br></br><br></br>

    </div>

    {/* third section */}
        <div className=' cadii hover:scale-110 duration-700'> {/* hover:scale-90 duration-700 */}
        <Link to={`/`}><img className=' imagee cursor-pointer' src={house3} alt='name'/></Link>
        <h3 className='text-center font-normal md:text-2xl sm:text-1xl'>Modern houses</h3>
        <p className='text-center font-light'>One bedroom apartments available.</p>
        <p className='text-center p-2 font-extrabold'>Kshs: 2m</p><br></br>

        <button className='view'>View</button>
        <br></br><br></br>

        </div>

    {/* fourth section */}
    <div className=' cadii hover:scale-110 duration-700'> {/* hover:scale-90 duration-700 */}
        <Link to={`/`}><img className=' imagee cursor-pointer' src={house3} alt='name'/></Link>
        <h3 className='text-center font-normal md:text-2xl sm:text-1xl'>Modern houses</h3>
        <p className='text-center font-light'>One bedroom apartments available.</p>
        <p className='text-center p-2 font-extrabold'>Kshs: 2m</p><br></br>

        <button className='view'>View</button>
        <br></br><br></br>

        </div>

    {/* fifth section */}
    <div className=' cadii hover:scale-110 duration-700'> {/* hover:scale-90 duration-700 */}
        <Link to={`/`}><img className=' imagee cursor-pointer' src={house3} alt='name'/></Link>
        <h3 className='text-center font-normal md:text-2xl sm:text-1xl'>Modern houses</h3>
        <p className='text-center font-light'>One bedroom apartments available.</p>
        <p className='text-center p-2 font-extrabold'>Kshs: 2m</p><br></br>

        <button className='view'>View</button>
        <br></br><br></br>

        </div>

    {/* sixth section */}
    <div className=' cadii hover:scale-110 duration-700'> {/* hover:scale-90 duration-700 */}
        <Link to={`/`}><img className=' imagee cursor-pointer' src={house3} alt='name'/></Link>
        <h3 className='text-center font-normal md:text-2xl sm:text-1xl'>Modern houses</h3>
        <p className='text-center font-light'>One bedroom apartments available.</p>
        <p className='text-center p-2 font-extrabold'>Kshs: 2m</p><br></br>

        <button className='view'>View</button>
        <br></br><br></br>

        </div>

    </div>

    <Footer />
    </>    
  )
}

export default Properties
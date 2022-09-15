import React from 'react';
import aboutImage from '../images/banner.png';


function AboutDp() {
  return (
    <div>
         {/* Mision AND vission section */}

         <div className="relative z-10 bg-gray-50 text-gray-700 mt-10 dark:bg-gray-900/100 dark:text-gray-200 1s ease-in-out">
                <div className="w-full px-5 mt-20 flex justify-center item-center flex-column">
                    <div className="md:w-1/2 block justify-center item-center">
                        <h2 className="md:text-5xl font-bold ease-out transition-transform w-full flex py-5 justify-center item-center" >Diamond Processor</h2>

                        <p className="sm:text-sm  lg:text-xl md:text-xl w-full flex justify-center text-center item-center ease-in-out transition-shadow">The digital world has developed rapidly and has overwhelmed all aspects of life and technology has become a fundamental artery in our time, and we at the Diamond Processor Foundation for Information Technology, seek to achieve your digital ambitions with high professionalism and with a capable Saudi hand, to create for you from technology ambitions that embrace the sky
                        </p>
                    </div>

                </div>

                <div className="w-full md:flex md:flex-row justify-between">

                    <div className="md:w-1/2  justify-center item-center px-20 mt-5">
                        <h2 className="md:text-5xl font-bold ease-out transition-transform w-full flex py-5 justify-center item-center" > Mission </h2>
                        <p className="sm:text-sm  lg:text-xl md:text-xl w-full flex justify-center text-center item-center ease-in-out transition-shadow">We strive to be inspired in the digital world to achieve your goals and aspire to be unique in the Arab world.</p>
                    </div>

                    <div className="md:w-1/2  justify-center item-center px-20 mt-5">
                        <h2 className="md:text-5xl font-bold ease-out transition-transform w-full flex py-5 justify-center item-center" > Vision </h2>
                        <p className="sm:text-sm  lg:text-xl md:text-xl w-full flex justify-center text-center item-center ease-in-out transition-shadow">We strive to be inspired in the digital world to achieve your goals and aspire to be unique in the Arab world</p>
                    </div>
                </div>

                <div className="w-full flex justify-center item-center md:-mt-10">
                    <div className="md:w-1/2 flex justify-center items-center">

                        <img src={aboutImage} alt="about dp" className='md:w-1/2 object-cover animate-pulse' />

                    </div>
                </div>
            </div>
    </div>
  )
}

export default AboutDp
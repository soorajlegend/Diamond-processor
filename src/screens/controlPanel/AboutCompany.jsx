import React from 'react';
import { IoCameraSharp, IoDiamond, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoSnapchat, IoLogoTiktok, IoLogoWhatsapp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import AnimatedPage from '../../animation.js';

function AboutCompany() {
    return (
        <div className='flex flex-row'>
            <SideBar />
            <div className='block md:flex w-full md:flex-col md:px-10 py-20 item-center justify-center'>

                <AnimatedPage>
                <div className="relative z-10 md:-ml-10 md:-mt-[4rem]">
                    <div className="flex flex-row-reverse w-full relative z-10 max-w-sm overflow-hidden bg-white rounded-r-lg shadow-sm md: dark:bg-gray-800">
                        <div className="flex items-center justify-center w-12 bg-emerald-500">
                        <IoDiamond className='text-xl'/>
                        </div>

                        <div className="px-4 py-2 w-full">
                            <div className="flex justify-center md:justify-start w-full">
                                <span className="font-semibold text-2xl  text-emerald-500 dark:text-emerald-400"> Company Basic info</span>
                            </div>
                        </div>
                    </div>
                </div>
                    <form className="w-full flex justify-center md:-mt-4 px-3 md:px-24">
                        <div className=" grid grid-cols-1 gap-6 mt-8 md:grid-cols-2  ">
                            <div className='row-span-3 col-span-full '>
                                <label className="text-gray-700" htmlFor="name">Company description</label>
                            <textarea className="block w-full px-5 py-3 mt-2 text-base text-gray-600 placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500 apearance-none autoexpand" id="description " type="text" name="description" placeholder="Description here..." rows="6" required=""></textarea>
                            </div> <div className='row-span-3 my-5'>
                                <label className="text-gray-700" htmlFor="name">Mission</label>
                            <textarea className="block w-full px-5 py-3 mt-2 text-base text-gray-600 placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500 apearance-none autoexpand" id="description " type="text" name="description" placeholder="Description here..." rows="6" required=""></textarea>
                              
                            </div> <div className='row-span-3 my-5'>
                                <label className="text-gray-700" htmlFor="name">Vission</label>
                            <textarea className="block w-full px-5 py-3 mt-2 text-base text-gray-600 placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500 apearance-none autoexpand" id="description " type="text" name="description" placeholder="Description here..." rows="6" required=""></textarea>
                               
                            </div>

                            <div className='flex justify-end col-span-full'>
                                <Link to="/controlpanel" className="flex items-center justify-center h-10 w-full md:w-1/5 px-10 py-3 shadow-2xl text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-gradient-to-b from-green-500 to-green-800 rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-green-500 ">Save</Link>
                            </div>
                        </div>
                    </form>

                </AnimatedPage>

            </div>
        </div>
    )
}

export default AboutCompany
import React from 'react';
import { IoCameraSharp, IoDiamond, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoSnapchat, IoLogoTiktok, IoLogoWhatsapp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import AnimatedPage from '../../animation.js';
import Logo from '../../images/logo-mix.png';

function Info() {
    return (
        <div className='flex flex-row'>
            <SideBar />
            <div className='block md:flex flex-col w-full  md:px-10 py-20 item-center justify-center'>



                <AnimatedPage>
                    <div className="relative md:-ml-10 md:-mt-[8rem] ">
                        <div className="flex flex-row-reverse w-full  max-w-sm overflow-hidden bg-white rounded-r-lg shadow-sm md: dark:bg-gray-800">
                            <div className="flex items-center justify-center w-12 bg-emerald-500">
                                <IoDiamond className='text-xl' />

                            </div>

                            <div className="px-4 py-2 w-full">
                                <div className="flex justify-center md:justify-start w-full">
                                    <span className="font-semibold text-2xl  text-emerald-500 dark:text-emerald-400">About Company</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="w-full flex justify-center md:-mt-24 px-3 md:px-24">
                        <div className=" grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 ">


                            <a href="#" className="flex flex-row w-full justify-center items-center relative col-span-full">
                                <IoCameraSharp className='absolute text-2xl text-gray-700 -mr-20 -mb-10 center' />
                                <img alt="profile" src={Logo} className="mx-auto relative z-20 object-contain shadow-lg rounded-full h-20 w-20 " />
                            </a>
                            <div>
                                <label className="block mb-2 text-sm text-gray-700 ">Company name</label>
                                <input name="text" type="text" autocomplete="title" required="" placeholder="Eg Google" className="block w-full px-5 py-3 text-base text-gray-600 bg-gray-200/90 dark:bg-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500" />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-700 ">Company email address</label>
                                <input name="text" type="text" autocomplete="title" required="" placeholder="abcd@123.com" className="block w-full px-5 py-3 text-base text-gray-600 bg-gray-200/90 dark:bg-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500" />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-700 ">Mobile number</label>
                                <input name="text" type="text" autocomplete="title" required="" placeholder=" XXX-XX-XXXX-XX " className="block w-full px-5 py-3 text-base text-gray-600 bg-gray-200/90 dark:bg-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500" />
                            </div>

                            <div className='row-span-3'>

                                <label className="text-gray-700" htmlFor="name">Address</label>
                                <textarea className="block w-full px-5 py-3 mt-2 text-base text-gray-600 placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-200/90 dark:bg-gray-800 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500 apearance-none autoexpand" id="description " type="text" name="description" rows="6" placeholder="Description here..." required=""></textarea>
                            </div>

                            <div>
                                <label className="flex flex-row  mb-2 text-sm text-gray-700 "><IoLogoFacebook className='mr-2 text-xl' /> facebook</label>
                                <input name="text" type="text" autocomplete="title" required="" placeholder=" https:abcd.com " className="block w-full px-5 py-3 text-base text-gray-600 bg-gray-200/90 dark:bg-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500" />
                            </div>
                            <div>
                                <label className="flex flex-row  mb-2 text-sm text-gray-700 "><IoLogoInstagram className='mr-2 text-xl' />Instagram</label>
                                <input name="text" type="text" autocomplete="title" required="" placeholder=" https:abcd.com  " className="block w-full px-5 py-3 text-base text-gray-600 bg-gray-200/90 dark:bg-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500" />
                            </div>
                            <div>
                                <label className="flex flex-row  mb-2 text-sm text-gray-700 "><IoLogoWhatsapp className='mr-2 text-xl' />Whatsapp</label>
                                <input name="text" type="text" autocomplete="title" required="" placeholder=" https:abcd.com  " className="block w-full px-5 py-3 text-base text-gray-600 bg-gray-200/90 dark:bg-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500" />
                            </div>
                            <div>
                                <label className="flex flex-row  mb-2 text-sm text-gray-700 "><IoLogoLinkedin className='mr-2 text-xl' />Linked in</label>
                                <input name="text" type="text" autocomplete="title" required="" placeholder=" https:abcd.com  " className="block w-full px-5 py-3 text-base text-gray-600 bg-gray-200/90 dark:bg-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500" />
                            </div>
                            <div>
                                <label className="flex flex-row  mb-2 text-sm text-gray-700 "><IoLogoTiktok className='mr-2 text-xl' />Tiktok</label>
                                <input name="text" type="text" autocomplete="title" required="" placeholder=" https:abcd.com  " className="block w-full px-5 py-3 text-base text-gray-600 bg-gray-200/90 dark:bg-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500" />
                            </div>
                            <div>
                                <label className="flex flex-row  mb-2 text-sm text-gray-700 "><IoLogoSnapchat className='mr-2 text-xl' />Snapchat</label>
                                <input name="text" type="text" autocomplete="title" required="" placeholder=" https:abcd.com  " className="block w-full px-5 py-3 text-base text-gray-600 bg-gray-200/90 dark:bg-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500" />
                            </div>


                            <div className='flex justify-end col-span-full'>
                                <Link to="/controlpanel" className="flex items-center justify-center h-10 w-full md:w-2/3 px-10 py-3 shadow-2xl text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-gradient-to-b from-green-500 to-green-800 rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-green-500 ">Save</Link>
                            </div>
                        </div>
                    </form>

                </AnimatedPage>

            </div>
        </div>
    )
}

export default Info
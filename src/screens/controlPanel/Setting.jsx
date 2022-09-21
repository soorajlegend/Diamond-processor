import React from 'react';
import { IoCameraSharp, IoDiamond, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoSnapchat, IoLogoTiktok, IoLogoWhatsapp } from 'react-icons/io5';
import { Link, Navigate } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import AnimatedPage from '../../animation.js';
import Logo from '../../images/logo-mix.png';
import List from '../../components/subComponent/List';
import ImageList from '../../components/subComponent/ImageList';
import { useSelector } from 'react-redux';
import { selectControlAccess } from '../../slices/infoSlice';

function Setting() {

    const access = useSelector(selectControlAccess);


    // if (!access) {
    //     return (
    //         <Navigate to="/" replace={true} />
    //     )
    // } else {

        return (
            <div className='flex flex-row'>
                <SideBar />
                <div className='block md:flex flex-col w-full  md:px-10 py-20 item-center justify-center'>

                    <AnimatedPage>
                        <div className="relative mb-20 md:-ml-10 md:-mt-[5rem] ">
                            <div className="flex flex-row-reverse w-full  max-w-sm overflow-hidden bg-white rounded-r-lg shadow-sm md: dark:bg-gray-800">
                                <div className="flex items-center justify-center w-12 bg-emerald-500">
                                    <IoDiamond className='text-xl' />
                                </div>

                                <div className="px-4 py-2 w-full">
                                    <div className="flex justify-center md:justify-start w-full">
                                        <span className="font-semibold text-2xl  text-emerald-500 dark:text-emerald-400">Gallery</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className=" grid grid-cols-1 gap-0 md:grid-cols-1 ">

                            <section className="">
                                <div className=" items-center px-5 py-12 lg:px-5">
                                    <div className="flex flex-col w-full max-w-md py-10 px-5 mx-auto my-6 transition duration-500 ease-in-out transform shadow-2xl bg-white dark:bg-gray-900 rounded-lg md:mt-0">
                                        <form action="#" method="POST" className="space-y-6">
                                            <p className='text-gray-500'>change email address or password</p>
                                            <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 ">
                                                <div className='col-span-full'>
                                                    <label HtmlFor="email" className="block text-sm font-medium text-gray-600">Email address</label>
                                                    <div className="mt-1">
                                                        <input name="email" type="email" autocomplete="title" required="" placeholder="Your email here" className="block w-full px-5 py-3 text-base text-gray-600 bg-gray-200/50 dark:bg-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500" />
                                                    </div>
                                                </div>
                                                <div className='col-span-full'>
                                                    <label HtmlFor="oldpassword" className="block text-sm font-medium text-gray-600">Old Password</label>
                                                    <div className="mt-1">
                                                        <input name="oldpassword" type="password" autocomplete="false" required="" placeholder="Old password" className="block w-full px-5 py-3 text-base text-gray-600 bg-gray-200/50 dark:bg-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label HtmlFor="oldpassword" className="block text-sm font-medium text-gray-600">New Password</label>
                                                    <div className="mt-1">
                                                        <input name="oldpassword" type="password" autocomplete="false" required="" placeholder="Old password" className="block w-full px-5 py-3 text-base text-gray-600 bg-gray-200/50 dark:bg-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label HtmlFor="oldpassword" className="block text-sm font-medium text-gray-600">Comfirm new Password</label>
                                                    <div className="mt-1">
                                                        <input name="oldpassword" type="password" autocomplete="false" required="" placeholder="Old password" className="block w-full px-5 py-3 text-base text-gray-600 bg-gray-200/50 dark:bg-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                            </div>
                                            <div>
                                                <button className="flex items-center justify-center w-full px-10 py-2 text-base font-medium text-center text-gray-300 transition duration-500 ease-in-out transform bg-gradient-to-r from-green-400 to-green-800 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Save</button>
                                            </div>
                                        </form>
                                        <div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>


                    </AnimatedPage>

                </div>
            </div >
        )
    }
// }
export default Setting
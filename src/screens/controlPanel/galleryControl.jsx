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

function GalleryControl() {

    const access = useSelector(selectControlAccess);


    // if (!access) {
    //     return (
    //         <Navigate to="/" replace={true} />
    //     )
    // } else {

        const data = [
            { id: 1, image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" },
            { id: 2, image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" },
            { id: 3, image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" },
            { id: 4, image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" },
            { id: 5, image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" },
        ]
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


                        <div className=" grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 ">

                            <section className="">
                                <div className=" items-center px-5 py-12 lg:px-20">
                                    <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform shadow-2xl bg-white dark:bg-gray-900 rounded-lg md:mt-0">
                                        <div className="mt-8">
                                            <div className="mt-6">
                                                <form action="#" method="POST" className="space-y-6">
                                                    <p className='text-gray-500'>Add new image</p>
                                                    <div>
                                                        <label HtmlFor="email" className="block text-sm font-medium text-gray-600">Client's Name</label>
                                                        <div className="mt-1">
                                                            <input name="text" type="text" autocomplete="title" required="" placeholder="Client name" className="block w-full px-5 py-3 text-base text-gray-600 bg-gray-200/50 dark:bg-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500" />
                                                        </div>
                                                        <div>
                                                            <label for="email" className="block my-1 text-sm font-medium text-gray-600"> Description </label>
                                                            <textarea className="block w-full px-5 py-3 mt-2 text-base text-gray-600 placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-200/50 dark:bg-gray-800 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500 apearance-none autoexpand" id=" " type="text" name="description" placeholder="Description here..." required=""></textarea>
                                                        </div>
                                                    </div>
                                                    <div>

                                                        <div class="flex justify-center">
                                                            <div class="mb-3 w-96">
                                                                <label HtmlFor="formFile" class="block text-sm font-medium text-gray-600">Image upload</label>
                                                                <input class="form-control
                                                             block
                                                             w-full
                                                             px-3
                                                             py-2.5
                                                             text-base
                                                             font-normal
                                                             text-gray-700
                                                             bg-gray-200/50 bg-clip-padding
                                                            dark:bg-gray-800
                                                             rounded-lg
                                                             transition
                                                             ease-in-out
                                                             m-0
                                                             focus:text-gray-700 my-1 focus:border-gray-600 focus:outline-none" type="file" id="formFile" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button className="flex items-center justify-center w-full px-10 py-2 text-base font-medium text-center text-gray-300 transition duration-500 ease-in-out transform bg-gradient-to-r from-green-400 to-green-800 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Save</button>
                                                    </div>
                                                </form>
                                                <div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <ImageList images={data} />
                        </div>


                    </AnimatedPage>

                </div>
            </div >
        )
    }
// }

export default GalleryControl
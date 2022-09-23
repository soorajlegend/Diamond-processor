import React, { useState } from "react";
import { IoListCircleOutline, IoImagesOutline, IoPower, IoCogSharp, IoAlertOutline, IoChatbubblesOutline, IoPeopleOutline, IoBulbOutline, IoConstructOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../images/logo-mix.png';
import { UserAuth } from '../Context/AuthContext';
import { Info } from "../Context/InfoContext";

function SideBar() {

    const [show, setShow] = useState(false);

    const { info } = Info()
    
    const { user, logout } = UserAuth();
    const navigate = useNavigate(); 

    const logOut = async () => {
        try{
            await logout();
            navigate("/");
            // console.log('u\'re logged out')
            // console.log(user)
        } catch(e){
            // console.log(e.message)
        }
    }


    return (
        <div className="flex flex-row">
            <div className="w-64 absolute sm:relative bg-gradient-to-b from-gray-300 to-gray-100 dark:bg-gradient-to-b dark:from-gray-800/20 dark:to-gray-600/30 shadow md:h-full flex-col justify-between hidden sm:flex">

                <div className="px-8">
                    <div className="h-16 w-full flex items-center">
                        <img src={info.data.Logo} alt='top logo' className="mt-10" />
                    </div>
                    <ul className="mt-12">
                        <li className="flex w-full justify-between text-gray-700 dark:text-gray-400  hover:text-gray-500 cursor-pointer items-center mb-6">

                            <Link to="/controlpanel"><div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={4} y={4} width={6} height={6} rx={1} />
                                    <rect x={14} y={4} width={6} height={6} rx={1} />
                                    <rect x={4} y={14} width={6} height={6} rx={1} />
                                    <rect x={14} y={14} width={6} height={6} rx={1} />
                                </svg>
                                <span className="text-sm  ml-2">Dashboard</span>
                            </div>
                            </Link>
                        </li>

                        <Link to="/controlpanel/info">
                            <li className="flex w-full justify-between text-gray-700 dark:text-gray-400 hover:text-gray-500 cursor-pointer items-center mb-6">
                                <div className="flex items-center">
                                    <IoAlertOutline className="text-xl shadow-xl text-gray-7 dark:text-gray-500" />

                                    <span className="text-sm  ml-2">Our infomations</span>
                                </div>
                            </li>
                        </Link>

                        <Link to="/controlpanel/about">
                            <li className="flex w-full justify-between text-gray-700 dark:text-gray-400 hover:text-gray-500 cursor-pointer items-center mb-6">
                                <div className="flex items-center">
                                    <IoListCircleOutline className="text-xl shadow-xl text-gray-7 dark:text-gray-500" />

                                    <span className="text-sm  ml-2">About Us</span>
                                </div>
                            </li>
                        </Link>
                        <Link to="/controlpanel/services">
                            <li className="flex w-full justify-between text-gray-700 dark:text-gray-400 hover:text-gray-500 cursor-pointer items-center mb-6">
                                <div className="flex items-center">
                                    <IoConstructOutline className="text-xl shadow-xl text-gray-7 dark:text-gray-500" />

                                    <span className="text-sm  ml-2">Our Services</span>
                                </div>
                            </li>
                        </Link>
                        <Link to="/controlpanel/why-us">
                            <li className="flex w-full justify-between text-gray-700 dark:text-gray-400 hover:text-gray-500 cursor-pointer items-center mb-6">
                                <div className="flex items-center">
                                    <IoBulbOutline className="text-xl shadow-xl text-gray-7 dark:text-gray-500" />

                                    <span className="text-sm  ml-2">Why us</span>
                                </div>
                            </li></Link>
                        <Link to="/controlpanel/clients">
                            <li className="flex w-full justify-between text-gray-700 dark:text-gray-400 hover:text-gray-500 cursor-pointer items-center mb-6">
                                <div className="flex items-center">
                                    <IoPeopleOutline className="text-xl shadow-xl text-gray-7 dark:text-gray-500" />

                                    <span className="text-sm  ml-2">Our clients</span>
                                </div>
                            </li>
                        </Link>

                        <Link to="/controlpanel/gallery">
                            <li className="flex w-full justify-between text-gray-700 dark:text-gray-400 hover:text-gray-500 cursor-pointer items-center mb-6">
                            <div className="flex items-center">
                                <IoImagesOutline className="text-xl shadow-xl text-gray-7 dark:text-gray-500" />

                                <span className="text-sm  ml-2">Our Gallery</span>
                            </div>
                        </li>
                        </Link>

                        <Link to="/controlpanel/messages"> 
                        <li className="flex w-full justify-between text-gray-700 dark:text-gray-400 hover:text-gray-500 cursor-pointer items-center mb-6">
                            <div className="flex items-center">
                                <IoChatbubblesOutline className="text-xl shadow-xl text-gray-7 dark:text-gray-500" />

                                <span className="text-sm  ml-2">Messages</span>
                            </div>
                            <div className="py-1 px-3 bg-red-900 rounded-full text-gray-200 flex items-center justify-center text-xs">25</div>

                        </li>
                        </Link>
                        <Link to="/controlpanel/setting">
                            <li className="flex w-full justify-between text-gray-700 dark:text-gray-400 hover:text-gray-500 cursor-pointer items-center">
                            <div className="flex items-center">
                                <IoCogSharp className="text-xl shadow-xl text-gray-7 dark:text-gray-500" />

                                <span className="text-sm  ml-2">profile setting</span>
                            </div>
                        </li>
                            </Link>

                    </ul>
                    <div className="flex justify-center mt-48 mb-4 w-full">
                        <div className="relative ">
                            <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx={10} cy={10} r={7} />
                                    <line x1={21} y1={21} x2={15} y2={15} />
                                </svg>
                            </div>
                            <input className=" dark:bg-gray-700 focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-100 pl-10 py-2" type="text" placeholder="Search" />
                        </div>
                    </div>
                </div>
                <div className="px-8 border-t border-gray-700">
                    <div className="flex justify-center  text-gray-700 dark:text-gray-700 item-center py-2" onClick={() => logOut()}>
                        <IoPower className="text-2xl mr-3 shadow-xl" /> <p>Sign out</p>
                    </div>
                </div>
            </div>

            <div className={show ? "h-full w-64 absolute z-50 sm:relative from-gray-300 to-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-700 shadow flex-col justify-between sm:hidden transition duration-150 ease-in-out transform -translate-x-full" : "w-64 absolute sm:relative z-50 from-gray-300 to-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-700 shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out transform -translate-x-0"} id="mobile-nav">
                <div className="h-10 w-10 from-gray-300 to-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-700 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer" id="mobile-toggler" onClick={() => setShow(!show)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={6} cy={10} r={2} />
                        <line x1={6} y1={4} x2={6} y2={8} />
                        <line x1={6} y1={12} x2={6} y2={20} />
                        <circle cx={12} cy={16} r={2} />
                        <line x1={12} y1={4} x2={12} y2={14} />
                        <line x1={12} y1={18} x2={12} y2={20} />
                        <circle cx={18} cy={7} r={2} />
                        <line x1={18} y1={4} x2={18} y2={5} />
                        <line x1={18} y1={9} x2={18} y2={20} />
                    </svg>
                </div>
                <div className="px-8">
                    <div className="h-16 w-full flex items-center">
                        <img src={Logo} alt='top logo' className="mt-10" />
                    </div>
                    <ul className="mt-12">
                        <li className="flex w-full justify-between relative z-50 text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">

                            <Link to="/controlpanel"><div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={4} y={4} width={6} height={6} rx={1} />
                                    <rect x={14} y={4} width={6} height={6} rx={1} />
                                    <rect x={4} y={14} width={6} height={6} rx={1} />
                                    <rect x={14} y={14} width={6} height={6} rx={1} />
                                </svg>
                                <span className="text-sm  ml-2">Dashboard</span>
                            </div>
                            </Link>
                        </li>

                        <Link to="/controlpanel/info">
                            <li className="flex w-full justify-between text-gray-700 dark:text-gray-400 hover:text-gray-500 cursor-pointer items-center mb-6">
                                <div className="flex items-center">
                                    <IoAlertOutline className="text-xl shadow-xl text-gray-7 dark:text-gray-500" />

                                    <span className="text-sm  ml-2">Our infomations</span>
                                </div>
                            </li>
                        </Link>

                        <Link to="/controlpanel/about">
                            <li className="flex w-full justify-between text-gray-700 dark:text-gray-400 hover:text-gray-500 cursor-pointer items-center mb-6">
                                <div className="flex items-center">
                                    <IoListCircleOutline className="text-xl shadow-xl text-gray-7 dark:text-gray-500" />

                                    <span className="text-sm  ml-2">About Us</span>
                                </div>
                            </li>
                        </Link>
                        <Link to="/controlpanel/services">
                            <li className="flex w-full justify-between text-gray-700 dark:text-gray-400 hover:text-gray-500 cursor-pointer items-center mb-6">
                                <div className="flex items-center">
                                    <IoConstructOutline className="text-xl shadow-xl text-gray-7 dark:text-gray-500" />

                                    <span className="text-sm  ml-2">Our Services</span>
                                </div>
                            </li>
                        </Link>
                        <Link to="/controlpanel/why-us">
                            <li className="flex w-full justify-between text-gray-700 dark:text-gray-400 hover:text-gray-500 cursor-pointer items-center mb-6">
                                <div className="flex items-center">
                                    <IoBulbOutline className="text-xl shadow-xl text-gray-7 dark:text-gray-500" />

                                    <span className="text-sm  ml-2">Why us</span>
                                </div>
                            </li></Link>
                        <Link to="/controlpanel/clients">
                            <li className="flex w-full justify-between text-gray-700 dark:text-gray-400 hover:text-gray-500 cursor-pointer items-center mb-6">
                                <div className="flex items-center">
                                    <IoPeopleOutline className="text-xl shadow-xl text-gray-7 dark:text-gray-500" />

                                    <span className="text-sm  ml-2">Our clients</span>
                                </div>
                            </li>
                        </Link>

                        <Link to="/controlpanel/gallery">
                            <li className="flex w-full justify-between text-gray-700 dark:text-gray-400 hover:text-gray-500 cursor-pointer items-center mb-6">
                            <div className="flex items-center">
                                <IoImagesOutline className="text-xl shadow-xl text-gray-7 dark:text-gray-500" />

                                <span className="text-sm  ml-2">Our Gallery</span>
                            </div>
                        </li>
                        </Link>

                        <Link to="/controlpanel/messages"> 
                        <li className="flex w-full justify-between text-gray-700 dark:text-gray-400 hover:text-gray-500 cursor-pointer items-center mb-6">
                            <div className="flex items-center">
                                <IoChatbubblesOutline className="text-xl shadow-xl text-gray-7 dark:text-gray-500" />

                                <span className="text-sm  ml-2">Messages</span>
                            </div>
                            <div className="py-1 px-3 bg-red-900 rounded-full text-gray-200 flex items-center justify-center text-xs">25</div>

                        </li>
                        </Link>
                        <Link to="/controlpanel/setting">
                            <li className="flex w-full justify-between text-gray-700 dark:text-gray-400 hover:text-gray-500 cursor-pointer items-center">
                            <div className="flex items-center">
                                <IoCogSharp className="text-xl shadow-xl text-gray-7 dark:text-gray-500" />

                                <span className="text-sm  ml-2">profile setting</span>
                            </div>
                        </li>
                            </Link>

                    </ul>
                    <div className="flex justify-center mt-48 mb-4 w-full">
                        <div className="relative ">
                            <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx={10} cy={10} r={7} />
                                    <line x1={21} y1={21} x2={15} y2={15} />
                                </svg>
                            </div>
                            <input className=" dark:bg-gray-700 focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-100 pl-10 py-2" type="text" placeholder="Search" />
                        </div>
                    </div>
                </div>
                <div className="px-8 border-t border-gray-700">
                    <div className="flex justify-center  text-gray-700 dark:text-gray-700 item-center py-2" onClick={() => logOut()}>
                        <IoPower className="text-2xl mr-3 shadow-xl" /> <p>Sign out</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SideBar;

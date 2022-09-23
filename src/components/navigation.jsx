import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../images/logo-mix.png";
import { selectArabic, setArabic } from "../slices/infoSlice";
import { IoHomeOutline, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoSnapchat, IoLogoTiktok, IoLogoWhatsapp } from "react-icons/io5";
import { Info } from "../Context/InfoContext";



export default function Navigation() {


    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    const arabic = useSelector(selectArabic);

    const [language, setLanguage] = useState(arabic ? "English" : "Arabic");

    const changeLanguage = () => dispatch(setArabic(arabic ? false : true));


    const [active, setActive] = useState('home');

    const homeText = arabic ? "الصفحة الرئيسية" : "Home";
    const aboutText = arabic ? "معلومات عنا" : "About us";
    const servicesText = arabic ? "خدماتنا" : "Our services ";
    const clientText = arabic ? "عملاؤنا" : "Clients";
    const contactText = arabic ? "اتصل بنا" : "Contact us";
    const mail = arabic ? "بريد" : "Mail";

    const {  info } = Info()




    useEffect(() => {
        setLanguage(arabic ? "English" : "العربية");
    }, [arabic, info.data.Loading]);

    return (
        <>
            <div className="fixed z-[1000] top-0 bg-gray-200 dark:bg-gray-900/100 w-full ">
                <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"}>
                    <div className="bg-gray-800 opacity-50 inset-0 fixed w-full h-full" onClick={() => setShow(!show)} />
                    <div className="w-64 md-z-20 absolute left-0 z-40 top-0  shadow flex-col justify-between transition duration-150 ease-in-out h-full">
                        <div className="flex flex-col justify-between h-full">
                            <div className="px-6 pt-4  w-full min-h-screen bg-white dark:bg-gray-900/100 shadow-lg">
                                <div className="flex items-center justify-between">
                                    <div className={arabic ? "arabic-text flex flex-row-reverse items-center" : "flex items-center"}>
                                        <img src={info.data.Logo === '' ? Logo : info.data.Logo} alt="logo2" className="h-8" />
                                    </div>
                                    <div id="cross" className="bg-white dark:bg-gray-900/100 text-gray-500" onClick={() => setShow(!show)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={18} y1={6} x2={6} y2={18} />
                                            <line x1={6} y1={6} x2={18} y2={18} />
                                        </svg>
                                    </div>
                                </div>
                                <ul className="f-m-m px-5">
                                    <Link to="/" onClick={() => setShow(false)}>
                                        <li className="text-gray-500 pt-8 ">
                                            <div className={arabic ? "arabic-text flex flex-row-reverse items-center" : "flex items-center"}>
                                                <div className="md:w-6 md:h-6 w-5 h-5">
                                                    <IoHomeOutline />
                                                </div>
                                                <p className="text-green-500 ml-3 text-lg">{homeText}</p>
                                            </div>
                                        </li>
                                    </Link>

                                    <Link to="/about"  onClick={() => setShow(false)}>
                                        <li className="text-gray-500 pt-8">
                                            <div className={arabic ? "arabic-text flex flex-row-reverse items-center" : "flex items-center"}>
                                                <div className="md:w-6 md:h-6 w-5 h-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                                        <path d="M6.66667 13.3333L8.33334 8.33334L13.3333 6.66667L11.6667 11.6667L6.66667 13.3333Z" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-500 ml-3 text-lg">{aboutText}</p>
                                            </div>
                                        </li>
                                    </Link>

                                    <Link to="/services"  onClick={() => setShow(false)}>
                                        <li className="text-gray-500 pt-8">
                                            <div className={arabic ? "arabic-text flex flex-row-reverse items-center" : "flex items-center"}>
                                                <div className="md:w-6 md:h-6 w-5 h-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                                        <path d="M6.66667 13.3333L8.33334 8.33334L13.3333 6.66667L11.6667 11.6667L6.66667 13.3333Z" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-500 ml-3 text-lg">{servicesText}</p>
                                            </div>
                                        </li>
                                    </Link>

                                    <Link to="/clients"  onClick={() => setShow(false)}>
                                        <li className="text-gray-500 pt-8">
                                            <div className={arabic ? "arabic-text flex flex-row-reverse items-center" : "flex items-center"}>
                                                <div className="md:w-6 md:h-6 w-5 h-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                                        <path d="M6.66667 13.3333L8.33334 8.33334L13.3333 6.66667L11.6667 11.6667L6.66667 13.3333Z" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-500 ml-3 text-lg">{clientText}</p>
                                            </div>
                                        </li>
                                    </Link>

                                    <Link to="/contact"  onClick={() => setShow(false)}>
                                        <li className="text-gray-500 pt-8">
                                            <div className={arabic ? "arabic-text flex flex-row-reverse items-center" : "flex items-center"}>
                                                <div className="md:w-6 md:h-6 w-5 h-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                                        <path d="M6.66667 13.3333L8.33334 8.33334L13.3333 6.66667L11.6667 11.6667L6.66667 13.3333Z" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-500 ml-3 text-lg">{contactText}</p>
                                            </div>
                                        </li>
                                    </Link>


                                    <Link to="/login"  onClick={() => setShow(false)}>
                                        <li className="text-gray-500 pt-8">
                                            <div className={arabic ? "arabic-text flex flex-row-reverse items-center" : "flex items-center"}>
                                                <div className="md:w-6 md:h-6 w-5 h-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                                        <path d="M6.66667 13.3333L8.33334 8.33334L13.3333 6.66667L11.6667 11.6667L6.66667 13.3333Z" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-500 ml-3 text-lg">{mail}</p>
                                            </div>
                                        </li>
                                    </Link>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile */}
                <nav className={arabic ? "arabic-text fixed h-auto flex-row-reverse w-full mx-auto z-1 px-10 top-0 bg-white dark:bg-gray-900/100 shadow-lg" : "fixed h-auto w-full mx-auto z-1 px-10 top-0 bg-white dark:bg-gray-900/100 shadow-lg"}>
                    <div className={arabic ? "arabic-text container justify-between bg-white dark:bg-gray-900/100 h-16 flex  flex-row-reverse items-center lg:items-stretch mx-auto" : "container justify-between bg-white dark:bg-gray-900/100 h-16 flex items-center lg:items-stretch mx-auto"}>
                        <div className={arabic ? "arabic-text bg-white dark:bg-gray-900/100 flex  flex-row-reverse items-center" : "bg-white dark:bg-gray-900/100 flex items-center"}>
                            <div className={arabic ? "arabic-text flex flex-row-reverse -mr-[30px] md:-mr-0 md:ml-10 items-center " : "-ml-[30px] md:-ml-0 md:mr-10  flex items-center "}>
                                <img src={info.data.Logo === '' ? Logo : info.data.Logo} alt="logo" className="h-10" />
                            </div>
                            <ul className={arabic ? "arabic-text pr-12 xl:flex  flex-row-reverse items-center  hidden" : "pr-12 xl:flex items-center  hidden"}>
                                <li className={active === 'home' ? "cursor-pointer h-full flex items-center text-sm text-green-300 tracking-normal pb-4 mr-5 mt-4 border-b-2 border-green-300" : "cursor-pointer h-full flex items-center text-sm text-gray-500 tracking-normal pb-4 mr-5 mt-4"} onClick={() => setActive('home')}><Link to="/">{homeText}</Link></li>
                                <li className={active === 'about' ? "cursor-pointer h-full flex items-center text-green-300 border-b-2 border-green-300 pb-4  mt-4 text-sm text-gry-800 mx-5 tracking-normal" : "cursor-pointer h-full flex items-center text-sm text-gray-500 mx-5 tracking-normal"} onClick={() => setActive('about')}><Link to="/about">{aboutText}</Link></li>
                                <li className={active === 'services' ? "cursor-pointer h-full flex items-center text-green-300 border-b-2 border-green-300 pb-4  mt-4 text-sm text-gry-800 mx-5 tracking-normal" : "cursor-pointer h-full flex items-center text-sm text-gray-500 mx-5 tracking-normal"} onClick={() => setActive('services')}><Link to="/services" >{servicesText}</Link></li>
                                <li className={active === 'clients' ? "cursor-pointer h-full flex items-center text-green-300 border-b-2 border-green-300 pb-4  mt-4 text-sm  mx-5 tracking-normal" : "cursor-pointer h-full flex items-center text-sm text-gray-500 mx-5 tracking-normal"} onClick={() => setActive('clients')}><Link to="/clients">{clientText}</Link></li>
                                <li className={active === 'contact' ? "cursor-pointer h-full flex items-center text-green-300 border-b-2 border-green-300 pb-4  mt-4 text-sm  mx-5 tracking-normal" : "cursor-pointer h-full flex items-center text-sm text-gray-500 mx-5 tracking-normal"} onClick={() => setActive('contact')}><Link to="/contact">{contactText}</Link></li>
                                <li className={active === 'login' ? "cursor-pointer h-full flex items-center text-green-300 border-b-2 border-green-300 pb-4  mt-4 text-sm mx-5 tracking-normal" : "cursor-pointer h-full flex items-center text-sm text-gray-500 mx-5 tracking-normal"} onClick={() => setActive('login')}><Link to="/login">{mail}</Link></li>
                            </ul>

                        </div>
                        <div className="h-full hidden md:flex justify-center items-center">
                            <ul className={arabic ? "arabic-text flex flex-row-reverse justify-center items-center h-full" : "flex  flex-row justify-center right-0 item-center"}>
                                <div className={arabic ? "arabic-text flex justify-center flex-row-reverse md:justify-center items-center h-full w-full md:w-auto md:items-center space-x-6 " : "flex justify-center md:justify-center items-center h-full w-full md:w-auto md:items-center space-x-6 "}>
                                    
                                    <a href={info.data.facebook}><li className="w-10 h-10 mx-2 pointer pt-2  flex justify-center item-center">
                                    <IoLogoFacebook className="text-2xl" />
                                    </li>
                                    </a>
                                    <a href={info.data.instagram}>
                                    <li className="w-10 h-10 mx-2 pointer  pt-2  flex justify-center item-center">
                                       <IoLogoInstagram className="text-2xl" />
                                    </li>
                                    </a>
                                    <a href={info.data.whatsapp}>
                                    <li className="w-10 h-10 mx-2 pointer  pt-2  flex justify-center item-center">
                                       
                                       <IoLogoWhatsapp className="text-2xl" />
                                    </li>
                                    </a>
                                    <a href={info.data.linkedIn}>
                                    <li className="w-10 h-10 mx-2 pointer  pt-2  flex justify-center item-center">
                                       <IoLogoLinkedin className="text-2xl" />
                                    </li></a>
                                    <a href={info.data.tiktok}>
                                    <li className="w-10 h-10 mx-2 pointer  pt-2  flex justify-center item-center">
                                        <IoLogoTiktok className="text-2xl" />
                                    </li>
                                    </a>
                                    <a href={info.data.snapchat}>
                                    <li className="w-10 h-10 mx-2 pointer  pt-2  flex justify-center item-center">
                                        <IoLogoSnapchat className="text-2xl" />
                                    </li>
                                    </a>
                                    <li className="flex justify-center item-center mx-2 rounded-lg w-full scale-75 md:scale-100 shadow-lg py-1 md:py-2 px-2 md:px-3 pointer bg-gradient-to-b from-green-400 to-green-800 hover:bg-gradient-to-r text-gray-900 dark:text-white hover:from-green-400 hover:to-green-800 hover:-skew-x-3 3s ease-in" onClick={changeLanguage}>{language}</li>
                                </div>
                            </ul>
                        </div>

                        <div className="visible xl:hidden flex items-center relative bg-white dark:bg-gray-900/100">
                            <div className={arabic ? "arabic-text flex -ml-8 md:ml-0 flex-row-reverse" : "flex -mr-8 md:mr-0"}>
                                <span className="flex justify-center item-center mx-2 rounded-lg shadow-lg py-1.5 px-3 pointer bg-gradient-to-b from-green-400 to-green-800 hover:bg-gradient-to-r text-white dark:text-white hover:from-green-400 hover:to-green-800 hover:-skew-x-3 transition ease-in" onClick={changeLanguage}>{language}</span>

                                <svg onClick={() => setShow(!show)} aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={4} y1={8} x2={20} y2={8} />
                                    <line x1={4} y1={16} x2={20} y2={16} />
                                </svg>
                            </div>

                        </div>
                    </div>
                </nav>
                {/* Navigation ends */}



                {/* Page title starts
                <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">
                    <div>
                        <h4 className="text-2xl font-bold leading-tight text-gray-500">User Profile</h4>
                        <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-600 text-sm mt-3">
                            <li className="flex items-center mr-3 mt-3 md:mt-0">
                                <span className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-paperclip" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9 l6.5 -6.5" />
                                    </svg>
                                </span>
                                <span>Active</span>
                            </li>
                            <li className="flex items-center mr-3 mt-3 md:mt-0">
                                <span className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-up" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="3 17 9 11 13 15 21 7" />
                                        <polyline points="14 7 21 7 21 14" />
                                    </svg>
                                </span>
                                <span> Trending</span>
                            </li>
                            <li className="flex items-center mt-3 md:mt-0">
                                <span className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-departure" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z" transform="rotate(-15 12 12) translate(0 -1)" />
                                        <line x1={3} y1={21} x2={21} y2={21} />
                                    </svg>
                                </span>
                                <span>Started on 29 Jan 2020</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6 lg:mt-0">
                        <button className="mx-2 my-2 bg-white dark:bg-gray-900/100 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-100 dark:bg-gray-900/100 rounded text-green-300 px-6 py-2 text-sm">Back</button>
                        <button className="transition duration-150 ease-in-out hover:bg-green-600 focus:outline-none border bg-green-300 rounded text-white px-8 py-2 text-sm">Edit Profile</button>
                    </div>
                </div> */}
                {/* Page title ends */}

            </div>
        </>
    );
}
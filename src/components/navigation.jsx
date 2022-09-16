import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../images/logo-mix.png";
import { selectArabic, setArabic } from "../slices/infoSlice";
import { IoHomeOutline } from "react-icons/io5";



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

    useEffect(() => {
        setLanguage(arabic ? "English" : "العربية");
    }, [arabic]);

    return (
        <>
            <div className="fixed z-50 top-0 bg-gray-200 dark:bg-gray-900/100 w-full ">
                <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"}>
                    <div className="bg-gray-800 opacity-50 inset-0 fixed w-full h-full" onClick={() => setShow(!show)} />
                    <div className="w-64 md-z-20 absolute left-0 z-40 top-0  shadow flex-col justify-between transition duration-150 ease-in-out h-full">
                        <div className="flex flex-col justify-between h-full">
                            <div className="px-6 pt-4  w-full min-h-screen bg-white dark:bg-gray-900/100 shadow-lg">
                                <div className="flex items-center justify-between">
                                    <div className={arabic ? "flex flex-row-reverse items-center" : "flex items-center"}>
                                        <img src={Logo} alt="logo2" className="h-8" />
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
                                    <Link to="/">
                                        <li className="text-gray-500 pt-8 ">
                                            <div className={arabic ? "flex flex-row-reverse items-center" : "flex items-center"}>
                                                <div className="md:w-6 md:h-6 w-5 h-5">
                                                    <IoHomeOutline />
                                                </div>
                                                <p className="text-green-500 ml-3 text-lg">{homeText}</p>
                                            </div>
                                        </li>
                                    </Link>

                                    <Link to="/about">
                                        <li className="text-gray-500 pt-8">
                                            <div className={arabic ? "flex flex-row-reverse items-center" : "flex items-center"}>
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

                                    <Link to="/services">
                                        <li className="text-gray-500 pt-8">
                                            <div className={arabic ? "flex flex-row-reverse items-center" : "flex items-center"}>
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

                                    <Link to="/clients">
                                        <li className="text-gray-500 pt-8">
                                            <div className={arabic ? "flex flex-row-reverse items-center" : "flex items-center"}>
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

                                    <Link to="/contact">
                                        <li className="text-gray-500 pt-8">
                                            <div className={arabic ? "flex flex-row-reverse items-center" : "flex items-center"}>
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


                                    <Link to="/login">
                                        <li className="text-gray-500 pt-8">
                                            <div className={arabic ? "flex flex-row-reverse items-center" : "flex items-center"}>
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
                <nav className={arabic ? "fixed h-auto flex-row-reverse w-full mx-auto z-1 px-10 top-0 bg-white dark:bg-gray-900/100 shadow-lg" : "fixed h-auto w-full mx-auto z-1 px-10 top-0 bg-white dark:bg-gray-900/100 shadow-lg"}>
                    <div className={arabic ? "container justify-between bg-white dark:bg-gray-900/100 h-16 flex  flex-row-reverse items-center lg:items-stretch mx-auto" : "container justify-between bg-white dark:bg-gray-900/100 h-16 flex items-center lg:items-stretch mx-auto"}>
                        <div className={arabic ? "bg-white dark:bg-gray-900/100 flex  flex-row-reverse items-center" : "bg-white dark:bg-gray-900/100 flex items-center"}>
                            <div className={arabic ? "flex flex-row-reverse -mr-[30px] items-center " : "-ml-[30px] flex items-center "}>
                                <img src={Logo} alt="logo" className="h-10" />
                            </div>
                            <ul className={arabic ? "pr-12 xl:flex  flex-row-reverse items-center  hidden" : "pr-12 xl:flex items-center  hidden"}>
                                <li className={active === 'home' ? "cursor-pointer h-full flex items-center text-sm text-green-300 tracking-normal pb-4 mr-5 mt-4 border-b-2 border-green-300" : "cursor-pointer h-full flex items-center text-sm text-gray-500 tracking-normal pb-4 mr-5 mt-4"} onClick={() => setActive('home')}><Link to="/">{homeText}</Link></li>
                                <li className={active === 'about' ? "cursor-pointer h-full flex items-center text-green-300 border-b-2 border-green-300 pb-4  mt-4 text-sm text-gry-800 mx-5 tracking-normal" : "cursor-pointer h-full flex items-center text-sm text-gray-500 mx-5 tracking-normal"} onClick={() => setActive('about')}><Link to="/about">{aboutText}</Link></li>
                                <li className={active === 'services' ? "cursor-pointer h-full flex items-center text-green-300 border-b-2 border-green-300 pb-4  mt-4 text-sm text-gry-800 mx-5 tracking-normal" : "cursor-pointer h-full flex items-center text-sm text-gray-500 mx-5 tracking-normal"} onClick={() => setActive('services')}><Link to="/services" >{servicesText}</Link></li>
                                <li className={active === 'clients' ? "cursor-pointer h-full flex items-center text-green-300 border-b-2 border-green-300 pb-4  mt-4 text-sm  mx-5 tracking-normal" : "cursor-pointer h-full flex items-center text-sm text-gray-500 mx-5 tracking-normal"} onClick={() => setActive('clients')}><Link to="/clients">{clientText}</Link></li>
                                <li className={active === 'contact' ? "cursor-pointer h-full flex items-center text-green-300 border-b-2 border-green-300 pb-4  mt-4 text-sm  mx-5 tracking-normal" : "cursor-pointer h-full flex items-center text-sm text-gray-500 mx-5 tracking-normal"} onClick={() => setActive('contact')}><Link to="/contact">{contactText}</Link></li>
                                <li className={active === 'login' ? "cursor-pointer h-full flex items-center text-green-300 border-b-2 border-green-300 pb-4  mt-4 text-sm mx-5 tracking-normal" : "cursor-pointer h-full flex items-center text-sm text-gray-500 mx-5 tracking-normal"} onClick={() => setActive('login')}><Link to="/login">{mail}</Link></li>
                            </ul>

                        </div>
                        <div className="h-full hidden md:flex justify-center items-center">
                            <ul className={arabic ? "flex flex-row-reverse justify-center items-center h-full" : "flex  flex-row justify-center right-0 item-center"}>
                                <div className={arabic ? "flex justify-center flex-row-reverse md:justify-center items-center h-full w-full md:w-auto md:items-center space-x-6 " : "flex justify-center md:justify-center items-center h-full w-full md:w-auto md:items-center space-x-6 "}>
                                    <li className="w-10 h-10 mx-2 pointer pt-2  flex justify-center item-center">
                                        <Link to="#Footer" className="text-gray-700 dark:text-white hover:text-green-400 w-6 animate-pulse hover:shadow-lg ">
                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M22.5 12.0645C22.5 6.26602 17.7984 1.56445 12 1.56445C6.20156 1.56445 1.5 6.26602 1.5 12.0645C1.5 17.3051 5.33906 21.649 10.3594 22.4374V15.1005H7.69266V12.0645H10.3594V9.75117C10.3594 7.12008 11.9273 5.66555 14.3255 5.66555C15.4744 5.66555 16.6763 5.87086 16.6763 5.87086V8.45508H15.3516C14.048 8.45508 13.6402 9.26414 13.6402 10.0957V12.0645H16.552L16.087 15.1005H13.6406V22.4384C18.6609 21.6504 22.5 17.3065 22.5 12.0645Z" fill="currentColor" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className="w-10 h-10 mx-2 pointer  pt-2  flex justify-center item-center">
                                        <Link to="#Footer" className="text-gray-700 dark:text-white hover:text-green-400 w-6 animate-pulse hover:shadow-lg ">
                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.25 5.13282C22.406 5.49955 21.513 5.74116 20.5992 5.85001C21.5595 5.28769 22.2817 4.39434 22.6303 3.33751C21.7224 3.86841 20.7307 4.24092 19.6978 4.43907C19.2629 3.98322 18.7397 3.62059 18.1603 3.3732C17.5808 3.12581 16.9571 2.99884 16.327 3.00001C13.7761 3.00001 11.7117 5.03438 11.7117 7.5422C11.7099 7.89102 11.7499 8.23881 11.8308 8.57813C10.0016 8.49238 8.2104 8.02575 6.57187 7.2081C4.93333 6.39044 3.48351 5.23977 2.31516 3.8297C1.90527 4.52069 1.6885 5.30909 1.6875 6.11251C1.6875 7.68751 2.50922 9.0797 3.75 9.89532C3.01487 9.87787 2.29481 9.68331 1.65094 9.32813V9.38438C1.65094 11.5875 3.24469 13.4203 5.35406 13.8375C4.9574 13.9433 4.54864 13.9968 4.13812 13.9969C3.84683 13.9974 3.5562 13.9691 3.27047 13.9125C3.85687 15.7172 5.56359 17.0297 7.58531 17.0672C5.94252 18.3333 3.9256 19.0175 1.85156 19.0125C1.48341 19.012 1.11561 18.99 0.75 18.9469C2.85993 20.2942 5.31255 21.0068 7.81594 21C16.3172 21 20.9616 14.0766 20.9616 8.07188C20.9616 7.87501 20.9564 7.67813 20.947 7.48595C21.8485 6.84472 22.6283 6.04787 23.25 5.13282V5.13282Z" fill="currentColor" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className="w-10 h-10 mx-2 pointer  pt-2  flex justify-center item-center">
                                        <Link to="#Footer" className="text-gray-700 dark:text-white hover:text-green-400 w-6 animate-pulse hover:shadow-lg ">
                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 1.5C6.20156 1.5 1.5 6.32344 1.5 12.2672C1.5 17.025 4.50937 21.0562 8.68125 22.4812C8.73977 22.494 8.79949 22.5002 8.85938 22.5C9.24844 22.5 9.39844 22.2141 9.39844 21.9656C9.39844 21.7078 9.38906 21.0328 9.38437 20.1328C9.03705 20.2142 8.68173 20.2567 8.325 20.2594C6.30469 20.2594 5.84531 18.6891 5.84531 18.6891C5.36719 17.4469 4.67813 17.1141 4.67813 17.1141C3.76406 16.4719 4.67344 16.4531 4.74375 16.4531H4.74844C5.80313 16.5469 6.35625 17.5687 6.35625 17.5687C6.88125 18.4875 7.58437 18.7453 8.2125 18.7453C8.62783 18.737 9.03673 18.6412 9.4125 18.4641C9.50625 17.7703 9.77812 17.2969 10.0781 17.025C7.74844 16.7531 5.29688 15.8297 5.29688 11.7047C5.29688 10.5281 5.70469 9.56719 6.375 8.81719C6.26719 8.54531 5.90625 7.44844 6.47812 5.96719C6.55483 5.94883 6.63368 5.94095 6.7125 5.94375C7.09219 5.94375 7.95 6.08906 9.36563 7.07344C11.0857 6.59218 12.9049 6.59218 14.625 7.07344C16.0406 6.08906 16.8984 5.94375 17.2781 5.94375C17.357 5.94095 17.4358 5.94883 17.5125 5.96719C18.0844 7.44844 17.7234 8.54531 17.6156 8.81719C18.2859 9.57187 18.6937 10.5328 18.6937 11.7047C18.6937 15.8391 16.2375 16.7484 13.8984 17.0156C14.2734 17.3484 14.6109 18.0047 14.6109 19.0078C14.6109 20.4469 14.5969 21.6094 14.5969 21.9609C14.5969 22.2141 14.7422 22.5 15.1312 22.5C15.1942 22.5003 15.2571 22.494 15.3187 22.4812C19.4953 21.0562 22.5 17.0203 22.5 12.2672C22.5 6.32344 17.7984 1.5 12 1.5Z" fill="currentColor" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className="w-10 h-10 mx-2 pointer  pt-2  flex justify-center item-center">
                                        <Link to="#Footer" className="text-gray-700 dark:text-white hover:text-green-400 w-6 animate-pulse hover:shadow-lg ">
                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 1.5C6.20297 1.5 1.5 6.20297 1.5 12C1.5 17.797 6.20297 22.5 12 22.5C17.797 22.5 22.5 17.8022 22.5 12C22.5 6.19781 17.797 1.5 12 1.5ZM18.6666 6.33984C19.8815 7.76805 20.6046 9.54925 20.7291 11.4202C18.8367 11.3217 16.5727 11.3217 14.7572 11.4914C14.5275 10.9116 14.2922 10.343 14.0353 9.79594C16.1288 8.88844 17.7422 7.69594 18.6666 6.33984ZM12 3.24984C14.0395 3.24634 16.0156 3.95866 17.5837 5.26266C16.6322 6.46547 15.1392 7.51266 13.2797 8.30297C12.2625 6.42188 11.092 4.80328 9.84375 3.52875C10.5482 3.3469 11.2725 3.25322 12 3.24984V3.24984ZM8.04047 4.20703C9.30375 5.46469 10.4906 7.06641 11.5298 8.94141C9.55547 9.54469 7.29141 9.89062 4.875 9.89062C4.41562 9.89062 3.9675 9.87422 3.52453 9.84656C3.83266 8.63935 4.3949 7.5118 5.17367 6.53927C5.95244 5.56673 6.92981 4.77161 8.04047 4.20703V4.20703ZM3.26625 11.5842C3.76406 11.6063 4.26703 11.617 4.77562 11.6119C7.53187 11.5791 10.0969 11.1469 12.3009 10.44C12.5088 10.8722 12.7056 11.3152 12.8916 11.7689C12.6252 11.8272 12.3637 11.9056 12.1092 12.0033C9.09609 13.2689 6.72281 15.3084 5.4375 17.775C4.02813 16.1814 3.25007 14.1274 3.24984 12C3.24984 11.8594 3.25547 11.7211 3.26625 11.5842ZM12 20.7502C10.056 20.7525 8.16724 20.1036 6.63516 18.907C7.8 16.5994 9.87797 14.6883 12.4978 13.5037C12.7439 13.3889 13.072 13.2961 13.4494 13.2141C13.7619 14.0778 14.0408 14.9747 14.2861 15.9047C14.6525 17.3083 14.9223 18.7354 15.0938 20.1759C14.1061 20.5543 13.0576 20.7489 12 20.7502V20.7502ZM16.7306 19.3556C16.5595 17.9001 16.2871 16.4584 15.9155 15.0408C15.728 14.3297 15.5166 13.6406 15.2869 12.968C17.0039 12.8273 19.0603 12.8475 20.6953 12.968C20.5512 14.2606 20.1206 15.5047 19.4347 16.6097C18.7488 17.7148 17.825 18.6529 16.7306 19.3556V19.3556Z" fill="currentColor" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className="w-10 h-10 mx-2 pointer  pt-2  flex justify-center item-center">
                                        <Link to="#Footer" className="text-gray-700 dark:text-white hover:text-green-400 w-6 animate-pulse hover:shadow-lg ">
                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M22.5 12.0645C22.5 6.26602 17.7984 1.56445 12 1.56445C6.20156 1.56445 1.5 6.26602 1.5 12.0645C1.5 17.3051 5.33906 21.649 10.3594 22.4374V15.1005H7.69266V12.0645H10.3594V9.75117C10.3594 7.12008 11.9273 5.66555 14.3255 5.66555C15.4744 5.66555 16.6763 5.87086 16.6763 5.87086V8.45508H15.3516C14.048 8.45508 13.6402 9.26414 13.6402 10.0957V12.0645H16.552L16.087 15.1005H13.6406V22.4384C18.6609 21.6504 22.5 17.3065 22.5 12.0645Z" fill="currentColor" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className="w-10 h-10 mx-2 pointer  pt-2  flex justify-center item-center"><Link to="#Footer" className="text-gray-700 dark:text-white hover:text-green-400 w-6 animate-pulse hover:shadow-lg ">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.25 5.13282C22.406 5.49955 21.513 5.74116 20.5992 5.85001C21.5595 5.28769 22.2817 4.39434 22.6303 3.33751C21.7224 3.86841 20.7307 4.24092 19.6978 4.43907C19.2629 3.98322 18.7397 3.62059 18.1603 3.3732C17.5808 3.12581 16.9571 2.99884 16.327 3.00001C13.7761 3.00001 11.7117 5.03438 11.7117 7.5422C11.7099 7.89102 11.7499 8.23881 11.8308 8.57813C10.0016 8.49238 8.2104 8.02575 6.57187 7.2081C4.93333 6.39044 3.48351 5.23977 2.31516 3.8297C1.90527 4.52069 1.6885 5.30909 1.6875 6.11251C1.6875 7.68751 2.50922 9.0797 3.75 9.89532C3.01487 9.87787 2.29481 9.68331 1.65094 9.32813V9.38438C1.65094 11.5875 3.24469 13.4203 5.35406 13.8375C4.9574 13.9433 4.54864 13.9968 4.13812 13.9969C3.84683 13.9974 3.5562 13.9691 3.27047 13.9125C3.85687 15.7172 5.56359 17.0297 7.58531 17.0672C5.94252 18.3333 3.9256 19.0175 1.85156 19.0125C1.48341 19.012 1.11561 18.99 0.75 18.9469C2.85993 20.2942 5.31255 21.0068 7.81594 21C16.3172 21 20.9616 14.0766 20.9616 8.07188C20.9616 7.87501 20.9564 7.67813 20.947 7.48595C21.8485 6.84472 22.6283 6.04787 23.25 5.13282V5.13282Z" fill="currentColor" />
                                        </svg>
                                    </Link>
                                    </li>
                                    <li className="flex justify-center item-center mx-2 rounded-lg w-full scale-75 md:scale-100 shadow-lg py-1 md:py-2 px-2 md:px-3 pointer animate-pulse bg-gradient-to-b from-green-400 to-green-800 hover:bg-gradient-to-r text-gray-800 dark:text-gray-100 hover:from-green-400 hover:to-green-800 hover:-skew-x-3 3s ease-in" onClick={changeLanguage}>{language}</li>
                                </div>
                            </ul>
                        </div>

                        <div className="visible xl:hidden flex items-center relative bg-white dark:bg-gray-900/100">
                            <div className={arabic ? "flex -ml-8 md:ml-0 flex-row-reverse" : "flex -mr-8 md:mr-0"}>
                                <span className="flex justify-center item-center mx-2 rounded-lg shadow-lg py-1.5 px-3 pointer animate-pulse bg-gradient-to-b from-green-400 to-green-800 hover:bg-gradient-to-r text-white dark:text-gray-400 hover:from-green-400 hover:to-green-800 hover:-skew-x-3 transition ease-in" onClick={changeLanguage}>{language}</span>

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

import HeaderImage from '../images/home-pic.6903466.png';
import React from "react";
import { useSelector } from 'react-redux';
import { selectArabic } from '../slices/infoSlice';
import Bg from "../images/wave3.png";
import Bg1 from "../images/wave1.png";

function Hero() {


    const arabic = useSelector(selectArabic);


    const idText = arabic ? "الماس تكنولوجيا المعلومات" : "IT Diamond";
    const ProcessorText = arabic ? "المعالج" : "Processor";


    return (
        <>
            {/* Header Section */}
            <div className='flex w-full h-screen justify-center items-center px-10 dark:bg-gray-900/100 ease-in-out'>
                <img src={HeaderImage} alt="header " className={arabic ? 'absolute z-10 sm:block sm:w-full md:left-20 sm:-mt-20 md:w-[40%] md:mt-20  object-cover' : 'absolute z-10 sm:block sm:w-full md:right-20 sm:-mt-20 md:w-[40%] md:mt-20  object-cover'} />
                <div className={arabic ? "md:absolute absolute  -mt-[500px]  z-10 right-7 text-right sm:block  py-10 px-10 md:mt-10" : "md:absolute absolute  -mt-[500px] z-10 left-7 sm:block  py-10 px-10 md:mt-10"}>
                    <h1 className={arabic ? "text-4xl font-black md:text-7xl  md:max-w-[70%] md:ml-[30%]  border-l-emerald-300 text-gray-700 dark:text-gray-200 " : "text-4xl font-black md:text-7xl md:max-w-[50%] border-l-emerald-300 text-gray-700 dark:text-gray-200 "}>{idText}</h1>
                    <h2 className="text-xl font-bold md:text-3xl text-gray-600 dark:text-gray-300 animate-pulse">{ProcessorText}</h2>
                </div>
                <img src={arabic ? Bg1 : Bg} alt="" className='absolute object-cover top-10 h-full w-full xl:mt-10 z-0' />

            </div>
        </>);
}

export default Hero;

import HeaderImage from '../images/home-pic.6903466.png';
import React from "react";
import { useSelector } from 'react-redux';
import { selectArabic } from '../slices/infoSlice';
import Bg from "../images/wave3.png";
import Bg1 from "../images/wave1.png";
import { motion, variants } from "framer-motion";
import ScrollToTop from './scrollToTop';

function Hero() {


    const arabic = useSelector(selectArabic);


    const idText = arabic ? "الماس تكنولوجيا المعلومات" : "IT Diamond";
    const ProcessorText = arabic ? "المعالج" : "Processor";


    const HeaderTitle = {
        offScreen: {
            x: arabic ? 200 : -200,
        },
        onScreen: {
            y: 0,
            x: 0,
            scale: [1, 1, 1, 0.5, 1],
            transition: {
                type: "spring",
                bounce: 0.5,
                duration: 3
            }

        },
    }

    const miniHeader = {
        offScreen: {
            y: arabic ? 100 : -300,
            x: arabic ? -100 : 200,
        },
        onScreen: {
            y: 0,
            x: 0,
            scale: [0, 0, 0, 1.5, 1],
            transition: {
                type: "spring",
                bounce: 0.5,
                duration: 3
            }

        },
    }

    const animateImage = {
        offScreen: {
            x: 200 ,
        },
        onScreen: {
            x: 0,
            scale: [1, 1.2, 0.7, 1.2, 1],
            skew: [0, 25, 0],
            perspective: [0, 10, 0],
            transition: {
                type: "spring",
                bounce: 0.5,
                duration: 2
            }

        },
    }

    return (
        <>
            {/* Header Section */}
       <ScrollToTop />

            <motion.div 
            className=' w-full h-screen justify-center items-center px-10 dark:bg-gray-900/100 ease-in-out'
            id="hero"
            initial={"offScreen"}
            whileInView={"onScreen"}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ staggerChildren: 0.1 }} 
            >
                <div className="w-screen left-0 h-screen absolute z-20  md:mt-20 bg-gradient-to-t from-gray-50 to-gray-50/0  dark:from-gray-900 dark:to-gray-900/0"></div>
                <motion.img
                variants={animateImage}
                 src={HeaderImage} alt="header " className={arabic ? 'absolute z-50 sm:block sm:w-full md:left-20 sm:-mt-20 md:w-[40%] md:mt-20  object-cover' : 'absolute z-50 sm:block sm:w-full md:right-20 sm:-mt-20 md:w-[40%] md:mt-20  object-cover'} >
                </motion.img>
                
                <div className={arabic ? "md:absolute absolute  -mt-[500px]  z-50 right-7 text-right sm:block  py-10 px-10 md:mt-10" : "md:absolute absolute  -mt-[500px] z-10 left-7 sm:block  py-10 px-10 md:mt-10"}>

                    <motion.h1
                        className={arabic ? "text-4xl font-black md:text-7xl  md:max-w-[70%] md:ml-[30%]  border-l-emerald-300 text-gray-900 animate-pulse  dark:text-gray-200 arabic-text" : " text-4xl font-black md:text-7xl animate-pulse md:max-w-[50%] border-l-emerald-300 text-gray-900 md:text-gray-100 dark:text-gray-200 "}
                        variants={HeaderTitle}
                    >{idText}</motion.h1>
                    <motion.h2
                        className={arabic ? "text-xl font-bold md:text-5xl text-gray-800 md:text-gray-800 dark:text-gray-300 animate-pulseb text-arabic" : "text-xl font-bold md:text-5xl text-gray-800 md:text-gray-300 dark:text-gray-300 animate-pulse"}
                        variants={miniHeader}
                    >{ProcessorText}</motion.h2>
                </div>
               
                <img src={arabic ? Bg1 : Bg} alt="" className='absolute object-cover top-10 h-full w-full left-0 xl:mt-10 z-0' />

            </motion.div>
        </>);
}

export default Hero;

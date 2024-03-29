import React, { useEffect } from 'react';
import Bg from "../images/wave3.png";
import Bg1 from "../images/wave1.png";
import Logo from "../images/logo-mix.png";
import { useSelector } from 'react-redux';
import { selectArabic } from '../slices/infoSlice';
import { Info } from '../Context/InfoContext';
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoSnapchat, IoLogoTiktok, IoLogoWhatsapp } from 'react-icons/io5';

export default function Footer() {

  const arabic = useSelector(selectArabic); 

    // const idText = arabic ? "معالج ماسي لتكنولوجيا المعلومات" : "Diamond processor";

    // const copyright = arabic ? "معالج ماسي لتكنولوجيا المعلومات — 2020 ©" : "© 2020IT — Diamond processor";

    const { info } = Info();

useEffect(() => {
  // console.log(info.data.Logo)
}, [info])

    return (
  


      <footer className="absolute  h-[60vh] w-full flex mt-10 justify-center item-center text-gray-100 dark-text-800 dark:text-white body-font">
      <div className={arabic ? "arabic-text container  px-5 py-8 mx-auto flex flex-col md:flex-row-reverse justify-between items-end " : "container  px-5 py-8 mx-auto flex flex-col md:flex-row justify-between items-end "}>
      <img src={arabic ? Bg1 : Bg} alt="" className='absolute left-0 bottom-0 object-cover h-full w-full xl:mt-10 z-0' />
        <div className={arabic ? 'relative z-auto flex translate-y-32 md:translate-y-0  justify-between flex-row-reverse mt-20 md:mt-5' : 'relative z-auto flex justify-between translate-y-32 md:translate-y-0 flex-row mt-20 md:mt-5'}>
        <a className={arabic ? "arabic-text flex flex-row-reverse title-font font-medium  md:justify-start justify-center text-gray-900" : "flex flex-row title-font font-medium  md:justify-start justify-center text-gray-900"}>
         <img src={info.data.Logo !== '' ? info.data.Logo : Logo} alt="" className=' w-20 h-10 md:h-auto md:w-52' />
        </a>
        <p className={arabic ? "arabic-text text-sm text-gray-800 dark:text-gray-100 md:dark:text-white md:text-gray-100 sm:ml-4 sm:pr-4 sm:border-r-2 dark:border-gray-800 sm:border-gray-100 sm:py-2 sm:mt-0 " : "text-sm text-gray-800 dark:text-gray-100 md:dark:text-white md:text-gray-100  sm:ml-4 sm:pl-4 sm:border-l-2 dark:border-gray-800 sm:border-gray-100 sm:py-2 sm:mt-0 "}> © 2020{info.data.name}
          <a href="https://twitter.com/knyttneve" className=" text-gray-800 dark:text-gray-100 md:dark:text-white md:text-gray-100 ml-1" rel="noopener noreferrer" target="_blank">{info.data.email}</a>
        </p>
        </div>
       <div className={arabic ? 'relative z-auto flex  flex-row-reverse' : 'relative z-auto flex  flex-row'}>
       <span className="inline-flex sm:ml-auto   sm:mt-0 mt-4 md:justify-center">
          
          <a href={info.data.facebook}  target="_blank" className="ml-3 text-gray-100 dark-text-800 dark:text-white">
            <IoLogoFacebook className='text-xl' />
          </a>
          <a href={info.data.instagram}  target="_blank" className="ml-3 text-gray-100 dark-text-800 dark:text-white">
           <IoLogoInstagram className='text-xl' />
          </a>
          <a href={info.data.whatsapp}  target="_blank" className="ml-3 text-gray-100 dark-text-800 dark:text-white">
          <IoLogoWhatsapp className='text-xl' />
          </a>
          <a href={info.data.likedIn}  target="_blank" className="ml-3 text-gray-100 dark-text-800 dark:text-white">
          <IoLogoLinkedin className='text-xl' />
          </a>
          <a href={info.data.tiktok}  target="_blank" className="ml-3 text-gray-100 dark-text-800 dark:text-white">
           <IoLogoTiktok className='text-xl' />
          </a>
          
          <a href={info.data.snapchat}  target="_blank" className="ml-3 text-gray-100 dark-text-800 dark:text-white">
          <IoLogoSnapchat className='text-xl'/>
          </a>
        </span>

  </div>
              </div>
    </footer> 

  
  
    )
  }
  

//   <div id="Footer" className='w-full'>
//   {/* <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(62, 243, 150.405, 1)" offset="0%"></stop><stop stop-color="rgba(41.582, 130.602, 10.804, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,294L48,310.3C96,327,192,359,288,383.8C384,408,480,425,576,424.7C672,425,768,408,864,359.3C960,310,1056,229,1152,171.5C1248,114,1344,82,1440,89.8C1536,98,1632,147,1728,147C1824,147,1920,98,2016,138.8C2112,180,2208,310,2304,310.3C2400,310,2496,180,2592,147C2688,114,2784,180,2880,187.8C2976,196,3072,147,3168,163.3C3264,180,3360,261,3456,277.7C3552,294,3648,245,3744,204.2C3840,163,3936,131,4032,155.2C4128,180,4224,261,4320,294C4416,327,4512,310,4608,302.2C4704,294,4800,294,4896,253.2C4992,212,5088,131,5184,81.7C5280,33,5376,16,5472,65.3C5568,114,5664,229,5760,269.5C5856,310,5952,278,6048,285.8C6144,294,6240,343,6336,334.8C6432,327,6528,261,6624,220.5C6720,180,6816,163,6864,155.2L6912,147L6912,490L6864,490C6816,490,6720,490,6624,490C6528,490,6432,490,6336,490C6240,490,6144,490,6048,490C5952,490,5856,490,5760,490C5664,490,5568,490,5472,490C5376,490,5280,490,5184,490C5088,490,4992,490,4896,490C4800,490,4704,490,4608,490C4512,490,4416,490,4320,490C4224,490,4128,490,4032,490C3936,490,3840,490,3744,490C3648,490,3552,490,3456,490C3360,490,3264,490,3168,490C3072,490,2976,490,2880,490C2784,490,2688,490,2592,490C2496,490,2400,490,2304,490C2208,490,2112,490,2016,490C1920,490,1824,490,1728,490C1632,490,1536,490,1440,490C1344,490,1248,490,1152,490C1056,490,960,490,864,490C768,490,672,490,576,490C480,490,384,490,288,490C192,490,96,490,48,490L0,490Z"></path><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(62, 243, 144.273, 1)" offset="0%"></stop><stop stop-color="rgba(4.146, 201.183, 100.384, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 50px); opacity:0.9" fill="url(#sw-gradient-1)" d="M0,245L48,269.5C96,294,192,343,288,367.5C384,392,480,392,576,367.5C672,343,768,294,864,294C960,294,1056,343,1152,375.7C1248,408,1344,425,1440,359.3C1536,294,1632,147,1728,98C1824,49,1920,98,2016,114.3C2112,131,2208,114,2304,155.2C2400,196,2496,294,2592,343C2688,392,2784,392,2880,392C2976,392,3072,392,3168,359.3C3264,327,3360,261,3456,196C3552,131,3648,65,3744,40.8C3840,16,3936,33,4032,73.5C4128,114,4224,180,4320,179.7C4416,180,4512,114,4608,73.5C4704,33,4800,16,4896,73.5C4992,131,5088,261,5184,334.8C5280,408,5376,425,5472,424.7C5568,425,5664,408,5760,392C5856,376,5952,359,6048,326.7C6144,294,6240,245,6336,196C6432,147,6528,98,6624,114.3C6720,131,6816,212,6864,253.2L6912,294L6912,490L6864,490C6816,490,6720,490,6624,490C6528,490,6432,490,6336,490C6240,490,6144,490,6048,490C5952,490,5856,490,5760,490C5664,490,5568,490,5472,490C5376,490,5280,490,5184,490C5088,490,4992,490,4896,490C4800,490,4704,490,4608,490C4512,490,4416,490,4320,490C4224,490,4128,490,4032,490C3936,490,3840,490,3744,490C3648,490,3552,490,3456,490C3360,490,3264,490,3168,490C3072,490,2976,490,2880,490C2784,490,2688,490,2592,490C2496,490,2400,490,2304,490C2208,490,2112,490,2016,490C1920,490,1824,490,1728,490C1632,490,1536,490,1440,490C1344,490,1248,490,1152,490C1056,490,960,490,864,490C768,490,672,490,576,490C480,490,384,490,288,490C192,490,96,490,48,490L0,490Z"></path></svg> */}
//   <div className="relative md:w-full scroll-bar-hide lg:w-screen flex max-w-screen  md:justify-right md:items-start ">
//     <img className="absolute object-cover top-10 h-full w-full xl:mt-10 z-0" src={arabic ? Bg1 : Bg} alt="background" />

//   {/* <svg xmlns="http://www.w3.org/2000/svg" className="absolute object-cover  bottom-0 h-screen w-full xl:mt-10 z-0" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="0.2" d="M0,0L80,48C160,96,320,192,480,234.7C640,277,800,267,960,256C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
//     <div className={arabic ? "arabic-text flex pt-36 md:pt-32 lg:pt-40 xl:pt-96 mt-20  px-4 md:px-6  xl:px-20 flex-col justify-en items-start md:justify-end md:items-right relative z-10" : "flex pt-36 md:pt-32 lg:pt-40 xl:pt-96 mt-20  px-4 md:px-6  xl:px-20 flex-col justify-start items-start md:justify-start md:items-left relative z-10"}>
      
//       <div className={arabic ? "arabic-text w-screen text-right flex md:flex-row-reverse justify-start item-start xl:justify-center xl:space-x-8 xl:flex-row-reverse" : "w-screen text-right flex md:flex-row- justify-start item-start xl:justify-center xl:space-x-8 xl:flex-row"}>
//         {/* <div className="flex justify-start flex-row-reverse items-center space-x-4">
//           <div className="cursor-pointer w-12">
            
//             <img src={Logo} alt="logo" />
//           </div>
//           <p className="w-60 text-xl xl:text-2xl font-semibold leading-normal text-white">Diamond Processor</p>
//         </div> */}
//         <div className={arabic ? 'flex flex-row-reverse justify-start' : 'flex flex-row justify-center'}>
//         <div className={arabic ? "arabic-text mt-12 xl:mt-0 right-0 flex md:flex-row sm:flex-col gap-y-12 sm:gap-y-0 w-full md:w-auto sm:gap-x-20 md:gap-x-28 xl:gap-8" : "mt-12 xl:mt-0 right-0 flex md:flex-row sm:flex-col gap-y-12 sm:gap-y-0 w-full md:w-auto sm:gap-x-20 md:gap-x-28 xl:gap-8"}>
           
//             <div className="flex justify-start md:flex-row-reverse space-x-4">
//           <div className="cursor-pointer w-12">
            
//             <img src={Logo} alt="logo" />
//           </div>
//           <p className={arabic ? "arabic-text w-60 text-xl xl:text-2xl font-semibold leading-normal text-right text-white" : "w-60 text-xl xl:text-2xl font-semibold leading-normal text-left text-white"}>Diamond Processor</p>
//         </div>
          
//           <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
//             <h2 className={arabic ? "arabic-text text-base xl:text-xl text-right w-full font-bold xl:font-semibold leading-4 xl:leading-5 text-white" : "text-base xl:text-xl text-left w-full font-bold xl:font-semibold leading-4 xl:leading-5 text-white"}>Important links</h2>
//              <a href="#Footer" className={arabic ? "arabic-text text-right w-full text-base hover:text-gray-400  text-gray-100" : "text-left w-full text-base hover:text-gray-400  text-gray-100"}>
//               Homepage
//             </a>
//             <a href="#Footer" className={arabic ? "arabic-text text-right w-full text-base hover:text-gray-400  text-gray-100" : "text-left w-full text-base hover:text-gray-400  text-gray-100"}>
//               About Us
//             </a>
           
//             <a href="#Footer" className={arabic ? "arabic-text text-right w-full text-base hover:text-gray-400  text-gray-100" : "text-left w-full text-base hover:text-gray-400  text-gray-100"}>
//               Who we are
//             </a>
//             <a href="#Footer" className={arabic ? "arabic-text text-right w-full text-base hover:text-gray-400  text-gray-100" : "text-left w-full text-base hover:text-gray-400  text-gray-100"}>
//               Our services
//             </a>
//           </div>




//           <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
//             <h2 className={arabic ? "arabic-text text-base xl:text-xl font-bold xl:font-semibold leading-4 text-right w-full xl:leading-5 text-white" : "text-base xl:text-xl font-bold xl:font-semibold leading-4 text-right w-full xl:leading-5 text-white"}>Our Contact</h2>
//             <a href="#Footer" className={arabic ? "arabic-text text-right w-full text-base hover:text-gray-400  text-gray-100" : "text-left w-full text-base hover:text-gray-400  text-gray-100"}>
//              Mobile: +966540544246
//             </a>
//             <a href="#Footer" className={arabic ? "arabic-text text-right w-full text-base hover:text-gray-400  text-gray-100" : "text-left w-full text-base hover:text-gray-400  text-gray-100"}>
//              Email: Salem@idp.sa
//             </a>
//             <a href="#Footer" className={arabic ? "arabic-text text-right w-full text-base font-smooth hover:text-gray-400  text-gray-100" : "text-left w-full text-base font-smooth hover:text-gray-400  text-gray-100"}>
//               Location: <b>Diamond Processor</b>for information technology Saad bin thalabah, Riyard 13338, Kingdom of Saudi Arabia
//             </a>
//             <a href="#Footer" className={arabic ? "arabic-text text-right w-full text-base hover:text-gray-400  text-gray-100" : "text-left w-full text-base hover:text-gray-400  text-gray-100"}>
//               Time: From Saturday to Thursday from ten in the morning to  10 in the evening, every day <br />Friday is off
//             </a>
//           </div>
//         </div>
//         </div>
//       </div>
//       <div className="mt-12 flex  xl:justify-between xl:flex-row flex-col-reverse items-center xl:items-start w-full ">
//         <p className="mt-10 md:mt-12 xl:mt-0 text-sm  text-white">2020 Diamond Processor. All Rights Reserved</p>
//         <div className="mt-10 md:mt-12 xl:mt-0 md:flex-row flex-col flex md:justify-center w-full md:w-auto justify-start items-start space-y-4 md:space-y-0 md:items-center md:space-x-4 xl:space-x-6">
//           <a href="#Footer" className="text-base  text-white hover:text-gray-300">
//             Terms of service
//           </a>
//           <a href="#Footer" className="text-base  text-white hover:text-gray-300">
//             Privacy Policy
//           </a>
//           <a href="#Footer" className="text-base  text-white hover:text-gray-300">
//             Security
//           </a>
//           <a href="#Footer" className="text-base  text-white hover:text-gray-300">
//             Sitemap
//           </a>
//         </div>
//         <div className="flex  justify-start md:justify-end items-start  w-full md:w-auto md:items-center space-x-6 ">
//           <a href="#Footer" className="text-white hover:text-green-400 w-6 animate-bounce hover:shadow-lg ">
//             <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M23.25 5.13282C22.406 5.49955 21.513 5.74116 20.5992 5.85001C21.5595 5.28769 22.2817 4.39434 22.6303 3.33751C21.7224 3.86841 20.7307 4.24092 19.6978 4.43907C19.2629 3.98322 18.7397 3.62059 18.1603 3.3732C17.5808 3.12581 16.9571 2.99884 16.327 3.00001C13.7761 3.00001 11.7117 5.03438 11.7117 7.5422C11.7099 7.89102 11.7499 8.23881 11.8308 8.57813C10.0016 8.49238 8.2104 8.02575 6.57187 7.2081C4.93333 6.39044 3.48351 5.23977 2.31516 3.8297C1.90527 4.52069 1.6885 5.30909 1.6875 6.11251C1.6875 7.68751 2.50922 9.0797 3.75 9.89532C3.01487 9.87787 2.29481 9.68331 1.65094 9.32813V9.38438C1.65094 11.5875 3.24469 13.4203 5.35406 13.8375C4.9574 13.9433 4.54864 13.9968 4.13812 13.9969C3.84683 13.9974 3.5562 13.9691 3.27047 13.9125C3.85687 15.7172 5.56359 17.0297 7.58531 17.0672C5.94252 18.3333 3.9256 19.0175 1.85156 19.0125C1.48341 19.012 1.11561 18.99 0.75 18.9469C2.85993 20.2942 5.31255 21.0068 7.81594 21C16.3172 21 20.9616 14.0766 20.9616 8.07188C20.9616 7.87501 20.9564 7.67813 20.947 7.48595C21.8485 6.84472 22.6283 6.04787 23.25 5.13282V5.13282Z" fill="currentColor" />
//             </svg>
//           </a>
//           <a href="#Footer" className="text-white hover:text-green-400 w-6 animate-bounce hover:shadow-lg ">
//             <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path fillRule="evenodd" clipRule="evenodd" d="M22.5 12.0645C22.5 6.26602 17.7984 1.56445 12 1.56445C6.20156 1.56445 1.5 6.26602 1.5 12.0645C1.5 17.3051 5.33906 21.649 10.3594 22.4374V15.1005H7.69266V12.0645H10.3594V9.75117C10.3594 7.12008 11.9273 5.66555 14.3255 5.66555C15.4744 5.66555 16.6763 5.87086 16.6763 5.87086V8.45508H15.3516C14.048 8.45508 13.6402 9.26414 13.6402 10.0957V12.0645H16.552L16.087 15.1005H13.6406V22.4384C18.6609 21.6504 22.5 17.3065 22.5 12.0645Z" fill="currentColor" />
//             </svg>
//           </a>
//           <a href="#Footer" className="text-white hover:text-green-400 w-6 animate-bounce hover:shadow-lg ">
//             <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M12 1.5C6.20297 1.5 1.5 6.20297 1.5 12C1.5 17.797 6.20297 22.5 12 22.5C17.797 22.5 22.5 17.8022 22.5 12C22.5 6.19781 17.797 1.5 12 1.5ZM18.6666 6.33984C19.8815 7.76805 20.6046 9.54925 20.7291 11.4202C18.8367 11.3217 16.5727 11.3217 14.7572 11.4914C14.5275 10.9116 14.2922 10.343 14.0353 9.79594C16.1288 8.88844 17.7422 7.69594 18.6666 6.33984ZM12 3.24984C14.0395 3.24634 16.0156 3.95866 17.5837 5.26266C16.6322 6.46547 15.1392 7.51266 13.2797 8.30297C12.2625 6.42188 11.092 4.80328 9.84375 3.52875C10.5482 3.3469 11.2725 3.25322 12 3.24984V3.24984ZM8.04047 4.20703C9.30375 5.46469 10.4906 7.06641 11.5298 8.94141C9.55547 9.54469 7.29141 9.89062 4.875 9.89062C4.41562 9.89062 3.9675 9.87422 3.52453 9.84656C3.83266 8.63935 4.3949 7.5118 5.17367 6.53927C5.95244 5.56673 6.92981 4.77161 8.04047 4.20703V4.20703ZM3.26625 11.5842C3.76406 11.6063 4.26703 11.617 4.77562 11.6119C7.53187 11.5791 10.0969 11.1469 12.3009 10.44C12.5088 10.8722 12.7056 11.3152 12.8916 11.7689C12.6252 11.8272 12.3637 11.9056 12.1092 12.0033C9.09609 13.2689 6.72281 15.3084 5.4375 17.775C4.02813 16.1814 3.25007 14.1274 3.24984 12C3.24984 11.8594 3.25547 11.7211 3.26625 11.5842ZM12 20.7502C10.056 20.7525 8.16724 20.1036 6.63516 18.907C7.8 16.5994 9.87797 14.6883 12.4978 13.5037C12.7439 13.3889 13.072 13.2961 13.4494 13.2141C13.7619 14.0778 14.0408 14.9747 14.2861 15.9047C14.6525 17.3083 14.9223 18.7354 15.0938 20.1759C14.1061 20.5543 13.0576 20.7489 12 20.7502V20.7502ZM16.7306 19.3556C16.5595 17.9001 16.2871 16.4584 15.9155 15.0408C15.728 14.3297 15.5166 13.6406 15.2869 12.968C17.0039 12.8273 19.0603 12.8475 20.6953 12.968C20.5512 14.2606 20.1206 15.5047 19.4347 16.6097C18.7488 17.7148 17.825 18.6529 16.7306 19.3556V19.3556Z" fill="currentColor" />
//             </svg>
//           </a>
//           <a href="#Footer" className="text-white hover:text-green-400 w-6 animate-bounce hover:shadow-lg ">
//             <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M12 1.5C6.20156 1.5 1.5 6.32344 1.5 12.2672C1.5 17.025 4.50937 21.0562 8.68125 22.4812C8.73977 22.494 8.79949 22.5002 8.85938 22.5C9.24844 22.5 9.39844 22.2141 9.39844 21.9656C9.39844 21.7078 9.38906 21.0328 9.38437 20.1328C9.03705 20.2142 8.68173 20.2567 8.325 20.2594C6.30469 20.2594 5.84531 18.6891 5.84531 18.6891C5.36719 17.4469 4.67813 17.1141 4.67813 17.1141C3.76406 16.4719 4.67344 16.4531 4.74375 16.4531H4.74844C5.80313 16.5469 6.35625 17.5687 6.35625 17.5687C6.88125 18.4875 7.58437 18.7453 8.2125 18.7453C8.62783 18.737 9.03673 18.6412 9.4125 18.4641C9.50625 17.7703 9.77812 17.2969 10.0781 17.025C7.74844 16.7531 5.29688 15.8297 5.29688 11.7047C5.29688 10.5281 5.70469 9.56719 6.375 8.81719C6.26719 8.54531 5.90625 7.44844 6.47812 5.96719C6.55483 5.94883 6.63368 5.94095 6.7125 5.94375C7.09219 5.94375 7.95 6.08906 9.36563 7.07344C11.0857 6.59218 12.9049 6.59218 14.625 7.07344C16.0406 6.08906 16.8984 5.94375 17.2781 5.94375C17.357 5.94095 17.4358 5.94883 17.5125 5.96719C18.0844 7.44844 17.7234 8.54531 17.6156 8.81719C18.2859 9.57187 18.6937 10.5328 18.6937 11.7047C18.6937 15.8391 16.2375 16.7484 13.8984 17.0156C14.2734 17.3484 14.6109 18.0047 14.6109 19.0078C14.6109 20.4469 14.5969 21.6094 14.5969 21.9609C14.5969 22.2141 14.7422 22.5 15.1312 22.5C15.1942 22.5003 15.2571 22.494 15.3187 22.4812C19.4953 21.0562 22.5 17.0203 22.5 12.2672C22.5 6.32344 17.7984 1.5 12 1.5Z" fill="currentColor" />
//             </svg>
//           </a>
//           <a href="#Footer" className="text-white hover:text-green-400 w-6 animate-bounce hover:shadow-lg ">
//             <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M23.25 5.13282C22.406 5.49955 21.513 5.74116 20.5992 5.85001C21.5595 5.28769 22.2817 4.39434 22.6303 3.33751C21.7224 3.86841 20.7307 4.24092 19.6978 4.43907C19.2629 3.98322 18.7397 3.62059 18.1603 3.3732C17.5808 3.12581 16.9571 2.99884 16.327 3.00001C13.7761 3.00001 11.7117 5.03438 11.7117 7.5422C11.7099 7.89102 11.7499 8.23881 11.8308 8.57813C10.0016 8.49238 8.2104 8.02575 6.57187 7.2081C4.93333 6.39044 3.48351 5.23977 2.31516 3.8297C1.90527 4.52069 1.6885 5.30909 1.6875 6.11251C1.6875 7.68751 2.50922 9.0797 3.75 9.89532C3.01487 9.87787 2.29481 9.68331 1.65094 9.32813V9.38438C1.65094 11.5875 3.24469 13.4203 5.35406 13.8375C4.9574 13.9433 4.54864 13.9968 4.13812 13.9969C3.84683 13.9974 3.5562 13.9691 3.27047 13.9125C3.85687 15.7172 5.56359 17.0297 7.58531 17.0672C5.94252 18.3333 3.9256 19.0175 1.85156 19.0125C1.48341 19.012 1.11561 18.99 0.75 18.9469C2.85993 20.2942 5.31255 21.0068 7.81594 21C16.3172 21 20.9616 14.0766 20.9616 8.07188C20.9616 7.87501 20.9564 7.67813 20.947 7.48595C21.8485 6.84472 22.6283 6.04787 23.25 5.13282V5.13282Z" fill="currentColor" />
//             </svg>
//           </a>
//           <a href="#Footer" className="text-white hover:text-green-400 w-6 animate-bounce hover:shadow-lg ">
//             <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path fillRule="evenodd" clipRule="evenodd" d="M22.5 12.0645C22.5 6.26602 17.7984 1.56445 12 1.56445C6.20156 1.56445 1.5 6.26602 1.5 12.0645C1.5 17.3051 5.33906 21.649 10.3594 22.4374V15.1005H7.69266V12.0645H10.3594V9.75117C10.3594 7.12008 11.9273 5.66555 14.3255 5.66555C15.4744 5.66555 16.6763 5.87086 16.6763 5.87086V8.45508H15.3516C14.048 8.45508 13.6402 9.26414 13.6402 10.0957V12.0645H16.552L16.087 15.1005H13.6406V22.4384C18.6609 21.6504 22.5 17.3065 22.5 12.0645Z" fill="currentColor" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
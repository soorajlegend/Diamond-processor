import React from 'react';
import image1 from '../images/banner.png';
import image2 from '../images/rami-al-zayat-w33-zg-dNL4-unsplash.jpg';
import image3 from '../images/home-pic.6903466.png';
import image4 from '../images/why-expert.4b07f585.png';
import image5 from '../images/banner.png';
import CTA from '../components/CTA';
import AllServices from '../components/AllServices';
import Device from '../images/checkout.a8d4821.png';
import { useSelector } from 'react-redux';
import { selectArabic } from '../slices/infoSlice';
import AnimatedPage from '../animation.js';
import Navigation from '../components/navigation';
import Space from '../components/Space';
import Footer from '../components/Footer';



function Services() {


    
const arabic = useSelector(selectArabic); 

const title = arabic ? "خدمات" : "Services";

    return (
        <AnimatedPage>
            <Navigation />
            <Space />
             <div className='max-w-[100vh]  md:max-w-full sm:overflow-x-hidden scroll-bar-hide'>
            <CTA title={title} image1={image1} image2={image2} image3={image3} image4={image4} />
            <AllServices image={image5} />
            <div className="w-full md:flex justify-center item-center md:-mt-10 sm:mt-20 sm:hidden">
                <div className="w-full flex justify-center items-center">
                    <img src={Device} alt="about dp" className='md:w-1/2 skew-x-3 rotate-y-3 object-cover ' />

                </div>
            </div>
        </div>
        <Footer />
        </AnimatedPage>
       
    )
}

export default Services
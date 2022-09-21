import React from 'react';
import image1 from '../images/banner.png';
import image2 from '../images/rami-al-zayat-w33-zg-dNL4-unsplash.jpg';
import image3 from '../images/home-pic.6903466.png';
import image4 from '../images/why-expert.4b07f585.png';
import CTA from '../components/CTA';
import Customers from '../components/Customers';
import { useSelector } from 'react-redux';
import { selectArabic } from '../slices/infoSlice';
import AnimatedPage from '../animation.js';
import Navigation from '../components/navigation';
import Space from '../components/Space';
import Footer from '../components/Footer';



function Clients() {

    const arabic = useSelector(selectArabic);

    const title = arabic ? "عملاء" : "Clients";


    return (
        <AnimatedPage>
            <Navigation />
            <Space />
            <div className='max-w-[100vh] md:max-w-full sm:overflow-x-hidden scroll-bar-hide'>
                <CTA title={title} image1={image1} image2={image2} image3={image3} image4={image4} />
                <Customers />
            </div>
            <Footer />
        </AnimatedPage>

    )
}

export default Clients
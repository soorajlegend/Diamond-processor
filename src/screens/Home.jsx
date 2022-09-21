
import React from 'react';
import Statistic from '../components/Statistics';
import Hero from '../components/Hero';
import AllServices from '../components/AllServices';
import image from '../images/banner.png';
import AboutDp from '../components/AboutDp';
import Whyus from '../components/Whyus';
import AnimatedPage from '../animation.js';
import Navigation from '../components/navigation';
import Space from '../components/Space';
import Footer from '../components/Footer';






export default function Home() {
    return (
        <AnimatedPage>
            <Navigation />
            <Space />
             <div className='max-w-[100vh] md:max-w-full sm:overflow-x-hidden scroll-bar-hide'>
            {/* Header Section */}
            <Hero />
           <AboutDp />
           <Whyus />
            <AllServices image={image}/>
            <Statistic />

        </div>
        <Footer />
        </AnimatedPage>
       
    )
}

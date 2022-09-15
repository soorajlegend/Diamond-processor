
import React from 'react';
import Statistic from '../components/Statistics';
import Hero from '../components/Hero';
import AllServices from '../components/AllServices';
import image from '../images/banner.png';
import AboutDp from '../components/AboutDp';
import Whyus from '../components/Whyus';





export default function Home() {
    return (
        <div className='max-w-[100vh] md:max-w-full sm:overflow-x-hidden scroll-bar-hide'>
            {/* Header Section */}
            <Hero />
           <AboutDp />
           <Whyus />
            <AllServices image={image}/>
            <Statistic />

        </div>
    )
}

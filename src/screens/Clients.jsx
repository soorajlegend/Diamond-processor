import React from 'react';
import image1 from '../images/banner.png';
import image2 from '../images/rami-al-zayat-w33-zg-dNL4-unsplash.jpg';
import image3 from '../images/home-pic.6903466.png';
import image4 from '../images/why-expert.4b07f585.png';
import CTA from '../components/CTA';
import Customers from '../components/Customers';

function Clients() {
    return (
        <div className='max-w-[100vh] md:max-w-full sm:overflow-x-hidden scroll-bar-hide'>
            <CTA title="Clients" image1={image1} image2={image2} image3={image3} image4={image4} />
            <Customers />

        </div>
    )
}

export default Clients
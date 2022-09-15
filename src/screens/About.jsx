import React, { useState } from 'react';
import image1 from '../images/banner.png';
import image2 from '../images/rami-al-zayat-w33-zg-dNL4-unsplash.jpg';
import image3 from '../images/home-pic.6903466.png';
import image4 from '../images/why-expert.4b07f585.png';
import image5 from '../images/banner.png';
import CTA from '../components/CTA';
import Gallery from '../components/Gallery';
import Concept from '../components/Ourconcept';



function About() {


    
const galleryImages = ([
    {id: 1, image: image1, title: 'Diamond Processor', description: 'The digital world has developed rapidly and has overwhelmed all aspects of life and technology has become a fundamental artery in our time'},
    {id: 2, image: image3, title: 'Diamond Processor', description: 'The digital world has developed rapidly and has overwhelmed all aspects of life and technology has become a fundamental artery in our time'},
    {id: 3, image: image4, title: 'Diamond Processor', description: 'The digital world has developed rapidly and has overwhelmed all aspects of life and technology has become a fundamental artery in our time'},
    {id: 4, image: image5, title: 'Diamond Processor', description: 'The digital world has developed rapidly and has overwhelmed all aspects of life and technology has become a fundamental artery in our time'},
    {id: 5, image: image2, title: 'Diamond Processor', description: 'The digital world has developed rapidly and has overwhelmed all aspects of life and technology has become a fundamental artery in our time'},
    {id: 6, image: image4, title: 'Diamond Processor', description: 'The digital world has developed rapidly and has overwhelmed all aspects of life and technology has become a fundamental artery in our time'}
]); 


  return (
    <div className='max-w-[100vh] md:max-w-full sm:overflow-x-hidden scroll-bar-hide'>
        <CTA title="About" image1={image1} image2={image2} image3={image3} image4={image4}/>
        <Concept image={image3} />
        <Gallery galleryImages={galleryImages}/>
    </div>
  )
}

export default About
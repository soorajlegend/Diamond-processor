import React from 'react';
import ContactForm from '../components/Contact';
import AnimatedPage from '../animation.js';
import Navigation from '../components/navigation';
import Space from '../components/Space';
import Footer from '../components/Footer';



function Contact() {
  return (
    <AnimatedPage>
      <Navigation />
      <Space />
      <div className='max-w-[100vh] md:max-w-full sm:overflow-x-hidden scroll-bar-hide'>
        <ContactForm />
    </div>
    <Footer />
    </AnimatedPage>
    
  )
}

export default Contact
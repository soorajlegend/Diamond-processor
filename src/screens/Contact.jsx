import React from 'react';
import ContactForm from '../components/Contact';
import AnimatedPage from '../animation.js';


function Contact() {
  return (
    <AnimatedPage>
      <div className='max-w-[100vh] md:max-w-full sm:overflow-x-hidden scroll-bar-hide'>
        <ContactForm />
    </div>
    </AnimatedPage>
    
  )
}

export default Contact
import React from 'react';
import image1 from '../images/banner.png';
import image2 from '../images/rami-al-zayat-w33-zg-dNL4-unsplash.jpg';
import image3 from '../images/home-pic.6903466.png';
import image4 from '../images/why-expert.4b07f585.png';
import image5 from '../images/banner.png';
import CTA from '../components/CTA';
import Gallery from '../components/Gallery';
import Concept from '../components/Ourconcept';
import { useSelector } from 'react-redux';
import { selectArabic } from '../slices/infoSlice';
import AnimatedPage from '../animation.js';
import Navigation from '../components/navigation';
import Space from '../components/Space';
import Footer from '../components/Footer';



function About() {

  const arabic = useSelector(selectArabic);

  const title = arabic ? "حول" : "About";

  const idText = arabic ? "معالج ماسي لتكنولوجيا المعلومات" : "IT Diamond processor";

  const abIdpText = arabic ? "لقد تطور العالم الرقمي بشكل سريع وطغى على جميع جوانب الحياة ، وأصبحت التكنولوجيا شريانًا أساسيًا في عصرنا ، ونحن في مؤسسة معالج الألماس لتكنولوجيا المعلومات ، نسعى إلى تحقيق طموحاتك الرقمية باحترافية عالية وبيد سعودية قادرة ، لنخلق لك من طموحات التكنولوجيا التي تحتضن السماء" : "The digital world has developed rapidly and has overwhelmed all aspects of life and technology has become a fundamental artery in our time, and we at the Diamond Processor Foundation for Information Technology, seek to achieve your digital ambitions with high professionalism and with a capable Saudi hand, to create for you from technology ambitions that embrace the sky";


  return (
    <AnimatedPage>
      <Navigation />
      <Space />
      <div className='max-w-[100vh] md:max-w-full sm:overflow-x-hidden scroll-bar-hide'>
        <CTA title={title} image1={image1} image2={image2} image3={image3} image4={image4} />
        <Concept image={image3} />
        <Gallery />
      </div>
      <Footer />
    </AnimatedPage>

  )
}




export default About
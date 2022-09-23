import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Info } from '../Context/InfoContext';
import { selectArabic } from '../slices/infoSlice';

export const Gallery = () => {

  const { Gallery, info } = Info();


  useEffect(() => {
console.log(Gallery.data)
  }, [Gallery])


  const arabic = useSelector(selectArabic); 

  // const abIdpText = arabic ? "لقد تطور العالم الرقمي بشكل سريع وطغى على جميع جوانب الحياة ، وأصبحت التكنولوجيا شريانًا أساسيًا في عصرنا ، ونحن في مؤسسة معالج الألماس لتكنولوجيا المعلومات ، نسعى إلى تحقيق طموحاتك الرقمية باحترافية عالية وبيد سعودية قادرة ، لنخلق لك من طموحات التكنولوجيا التي تحتضن السماء" : "The digital world has developed rapidly and has overwhelmed all aspects of life and technology has become a fundamental artery in our time, and we at the Diamond Processor Foundation for Information Technology, seek to achieve your digital ambitions with high professionalism and with a capable Saudi hand, to create for you from technology ambitions that embrace the sky";

  const gallery = arabic ? "عرض المعرض" : "View gallery";

    return (
      <div className="relative z-20 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className={arabic ? "arabic-text flex flex-col mb-6 lg:justify-start lg:flex-row md:mb-8" : "flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8"}>
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
          <p className={arabic ? "arabic-text text-gray-700 text-right lg:text-sm lg:max-w-md" : "text-gray-700 lg:text-sm lg:max-w-md"}>
            {"\"" + info.data.description}
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 order-last  mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">

          {Gallery.data != null &&  Gallery.data.map( (item) => 
             <a href="/" aria-label="View Item" key={item.id }>
             <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
               <img
                 className="object-cover w-full h-56 md:h-64 xl:h-80"
                 src={item.image}
                 alt={item.image}
               />
               <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                 <p className={arabic ? "arabic-text mb-4 text-lg font-bold text-right text-gray-100" : "mb-4 text-lg font-bold text-gray-100"}>{item.title}</p>
                 <p className={arabic ? "arabic-text text-sm tracking-wide text-gray-300 text-right" : "text-sm tracking-wide text-gray-300"}>{item.description}
                 </p>
               </div>
             </div>
           </a>
         )}
        </div>
        <div className="text-center">
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            {gallery}
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </a>
        </div>
      </div>
    );
  };

  export default Gallery 
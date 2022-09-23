import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Info } from '../Context/InfoContext';
import { selectArabic } from '../slices/infoSlice';

function CTA({ title, image1, image2, image3, image4 }) {

    
  const arabic = useSelector(selectArabic); 

  const idText = arabic ? "معالج ماسي لتكنولوجيا المعلومات" : "IT Diamond processor";
  const abIdpText = arabic ? "لقد تطور العالم الرقمي بشكل سريع وطغى على جميع جوانب الحياة ، وأصبحت التكنولوجيا شريانًا أساسيًا في عصرنا ، ونحن في مؤسسة معالج الألماس لتكنولوجيا المعلومات ، نسعى إلى تحقيق طموحاتك الرقمية باحترافية عالية وبيد سعودية قادرة ، لنخلق لك من طموحات التكنولوجيا التي تحتضن السماء" : "The digital world has developed rapidly and has overwhelmed all aspects of life and technology has become a fundamental artery in our time, and we at the Diamond Processor Foundation for Information Technology, seek to achieve your digital ambitions with high professionalism and with a capable Saudi hand, to create for you from technology ambitions that embrace the sky"
 
  const Live = arabic ? "تعديلات حية" : "Live modifications";
  const design = arabic ? "تصاميم استباقية" : "Proactive Designs";
  const support = arabic ? "دعم 24/24" : "support";
  const time = arabic ? "نصائح مجانية لتحسين وقت العمل" : "Free tips to improve work time";
  const { info } = Info();

  useEffect(() => {

  }, [info.loading])

  return (
    
   
<div className="max-w-screen-xl p-4 bg-white dark:bg-gray-900/100 dark:shadow-lg rounded-xl mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
    <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className={arabic ? "arabic-text lg:col-start-1 lg:max-w-2xl ml-auto" : "lg:col-start-2 lg:max-w-2xl ml-auto"}>
              <div className={arabic ? "arabic-text text-right" : "text-left " }>
              <p className="leading-6 text-green-400 font-bold uppercase text-3xl ">
                    {title}
                </p>
                <h4 className="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                   {info.data.name}
                </h4>
                <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                {info.data.description}
                </p>
              </div>
                <ul className="mt-8 md:grid md:grid-cols-2 gap-6">
                    <li className="mt-6 lg:mt-0">
                        <div className={arabic ? "arabic-text flex flex-row-reverse" : "flex"}>
                            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span className={arabic ? "arabic-text mr-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200" : "ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200"}>
                             {Live}
                            </span>
                        </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                        <div className={arabic ? "arabic-text flex flex-row-reverse" : "flex"}>
                            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span className={arabic ? "arabic-text mr-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200" : "ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200"}>
                               {design}
                            </span>
                        </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                        <div className={arabic ? "arabic-text flex flex-row-reverse" : "flex"}>
                            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span className={arabic ? "arabic-text mr-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200" : "ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200"}>
                              {support}
                            </span>
                        </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                        <div className={arabic ? "arabic-text flex flex-row-reverse" : "flex"}>
                            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span className={arabic ? "arabic-text mr-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200" : "ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200"}>
                               {time}
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={arabic ? "arabic-text mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-2" : "mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1"}>
                <div className="relative space-y-4">
                    <div className="flex items-end justify-center lg:justify-start space-x-4">
                        <img className="rounded-lg shadow-lg w-32 md:w-56" width="200" src={image1} alt="1"/>
                        <img className="rounded-lg shadow-lg w-40 md:w-64" width="260" src={image2} alt="2"/>
                    </div>
                    <div className="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                        <img className="rounded-lg shadow-lg w-24 md:w-40" width="170" src={image3} alt="3"/>
                        <img className="rounded-lg shadow-lg w-32 md:w-56" width="200" src={image4} alt="4"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
  )
}

export default CTA
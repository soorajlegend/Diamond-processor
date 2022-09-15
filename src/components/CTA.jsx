import React from 'react'
import { useSelector } from 'react-redux';
import { selectArabic } from '../slices/infoSlice';

function CTA({ title, image1, image2, image3, image4 }) {

    
    const arabic = useSelector(selectArabic); 

  return (
    
   
<div class="max-w-screen-xl p-4 bg-white dark:bg-gray-900/100 dark:shadow-lg rounded-xl mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
    <div class="relative">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class={arabic ? "lg:col-start-1 lg:max-w-2xl ml-auto" : "lg:col-start-2 lg:max-w-2xl ml-auto"}>
              <div className={arabic ? "text-right" : "text-left " }>
              <p class="leading-6 text-green-400 font-bold uppercase text-3xl ">
                    {title}
                </p>
                <h4 class="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                    Diamond Processor
                </h4>
                <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                The digital world has developed rapidly and has overwhelmed all aspects of life and technology has become a fundamental artery in our time, and we at the Diamond Processor Foundation for Information Technology, seek to achieve your digital ambitions with high professionalism and with a capable Saudi hand, to create for you from technology ambitions that embrace the sky.
                </p>
              </div>
                <ul class="mt-8 md:grid md:grid-cols-2 gap-6">
                    <li class="mt-6 lg:mt-0">
                        <div class={arabic ? "flex flex-row-reverse" : "flex"}>
                            <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span class={arabic ? "mr-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200" : "ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200"}>
                                Live modifications
                            </span>
                        </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                        <div class={arabic ? "flex flex-row-reverse" : "flex"}>
                            <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span class={arabic ? "mr-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200" : "ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200"}>
                               Proactive Designs
                            </span>
                        </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                        <div class={arabic ? "flex flex-row-reverse" : "flex"}>
                            <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span class={arabic ? "mr-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200" : "ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200"}>
                                24/24 support
                            </span>
                        </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                        <div class={arabic ? "flex flex-row-reverse" : "flex"}>
                            <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span class={arabic ? "mr-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200" : "ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200"}>
                                Free tips to improve work time
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class={arabic ? "mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-2" : "mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1"}>
                <div class="relative space-y-4">
                    <div class="flex items-end justify-center lg:justify-start space-x-4">
                        <img class="rounded-lg shadow-lg w-32 md:w-56" width="200" src={image1} alt="1"/>
                        <img class="rounded-lg shadow-lg w-40 md:w-64" width="260" src={image2} alt="2"/>
                    </div>
                    <div class="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                        <img class="rounded-lg shadow-lg w-24 md:w-40" width="170" src={image3} alt="3"/>
                        <img class="rounded-lg shadow-lg w-32 md:w-56" width="200" src={image4} alt="4"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
  )
}

export default CTA
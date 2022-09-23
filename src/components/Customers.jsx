import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Info } from '../Context/InfoContext';
import { selectArabic } from '../slices/infoSlice';

function Customers() {

  const arabic = useSelector(selectArabic);

  const title = arabic ? "نحن نعمل مع أفضل الشركاء" : "We Work with the Best Partners";

  const content = arabic ? "نحن على ثقة من أنه يمكننا إيجاد العملية التي ستساعدك على تحقيق أهدافك" : "We are confident that we can find the process that will help you meet your goals.";

  const btn = arabic ? "عرض المزيد" : "View more";

  const { Clients } = Info();


  useEffect(() => {
    console.log(Clients.data)
  }, [Clients])


  return (


    <>
      <div className="px-4 py-12">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full  py-12 lg:px-10  md:px-6 px-4 bg-white dark:bg-gray-900/100 shadow-lg rounded-lg mx-auto">
          <div className={arabic ? "arabic-text flex flex-col lg:justify-between lg:flex-row-reverse gap-x-8 gap-y-8" : "flex flex-col lg:justify-between lg:flex-row gap-x-8 gap-y-8"}>
            <div aria-label="text-area" className={arabic ? "arabic-text mb-7 text-right" : "mb-7 text-left"}>
              <p className={arabic ? "arabic-text lg:text-4xl text-3xl font-semibold leading-10 text-gray-800 dark:text-gray-400 dark:border-gray-500 mb-4 lg:max-w-[513px] w-full" : "lg:text-4xl text-3xl font-semibold leading-10 text-gray-800 dark:text-gray-400 dark:border-gray-500 mb-4 lg:max-w-[513px] w-full"}>
                {title}
              </p>
              <p className={arabic ? "arabic-text text-base leading-normal text-gray-800 dark:text-gray-400 dark:border-gray-500 mb-[64px] lg:max-w-[513px] w-full" : "text-base leading-normal text-gray-800 dark:text-gray-400 dark:border-gray-500 mb-[64px] lg:max-w-[513px] w-full"}>
                {content}
              </p>
              <button className={arabic ? "arabic-text  w-full px-4 py-4 text-base font-medium leading-none text-white duration-300 ease-in-out transform bg-gradient-to-b from-green-400 to-green-800 rounded-lg hover:bg-gray-700 lg:max-w-[187px] " : " w-full px-4 py-4 text-base font-medium leading-none text-white duration-300 ease-in-out transform bg-gradient-to-b from-green-400 to-green-800 rounded-lg hover:bg-gray-700 lg:max-w-[187px] "}>
                {btn}
              </button>
            </div>
            <div className="hidden lg:block md:block">
              <div className="flex flex-col xl:min-w-[624px] w-full ">
                <div className=" grid grid-cols-1 gap-6 mt-8 md:grid-cols-4">

                  {Clients.data != null && Clients.data.map((row) => 
                  
                  <div className='w-full flex justify-center px-5 py-2' key={row.id}>
                     <img src={row.image} className="h-20 rounded-md shadow-xl" alt='client logo' viewBox="0 0 100 26" />
                  </div>
                 
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default Customers
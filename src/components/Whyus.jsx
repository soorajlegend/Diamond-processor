import React from 'react';
import whyUs from '../images/why-expert.4b07f585.png';
import Device from '../images/checkout.a8d4821.png';
import { useSelector } from 'react-redux';
import { selectArabic } from '../slices/infoSlice';

function Whyus() {



  const arabic = useSelector(selectArabic);

  return (
    <>
 {/* Why dp section */}

 <div className="bg-gray-50 w-[95%] text-gray-700 mt-10 pt-10 dark:bg-gray-900/100 dark:text-gray-200 3s ease-in-out">
                <div className="w-full p-10 mt-10 flex justify-center item-center flex-column">
                    <div className="sm:w-full md:w-1/2 block justify-center item-center">
                        <h2 className="md:text-5xl sm:text-2xl font-bold ease-out transition-transform w-full flex py-5 justify-center item-center" >Why us</h2>
                    </div>

                </div>



                <div className="relative bg-white dark:bg-gray-900 p-4">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
                        <div className={arabic ? " md:pl-20 flex-row-reverse md:-mr-20" : "relative md:-ml-20 lg:col-start-2 md:pl-0 "}>
                          
                            <ul>
                                <li>
                                    <div className={arabic ? "flex  flex-row-reverse" : "flex"}>
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-b from-green-900 to-green-400 text-white shadow-lg animate-spin">
                                                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="h-6 w-6"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0ZM22,12a9.938,9.938,0,0,1-1.662,5.508l-1.192-1.193A.5.5,0,0,1,19,15.962V15a3,3,0,0,0-3-3H13a1,1,0,0,1-1-1v-.5a.5.5,0,0,1,.5-.5A2.5,2.5,0,0,0,15,7.5v-1a.5.5,0,0,1,.5-.5h1.379a2.516,2.516,0,0,0,1.767-.732l.377-.377A9.969,9.969,0,0,1,22,12Zm-19.951.963,3.158,3.158A2.978,2.978,0,0,0,7.329,17H10a1,1,0,0,1,1,1v3.949A10.016,10.016,0,0,1,2.049,12.963ZM13,21.949V18a3,3,0,0,0-3-3H7.329a1,1,0,0,1-.708-.293L2.163,10.249A9.978,9.978,0,0,1,17.456,3.63l-.224.224A.507.507,0,0,1,16.879,4H15.5A2.5,2.5,0,0,0,13,6.5v1a.5.5,0,0,1-.5.5A2.5,2.5,0,0,0,10,10.5V11a3,3,0,0,0,3,3h3a1,1,0,0,1,1,1v.962a2.516,2.516,0,0,0,.732,1.767l1.337,1.337A9.971,9.971,0,0,1,13,21.949Z" /></svg>

                                            </div>
                                        </div>
                                        <div className={arabic ? "ml-4 text-right mx-5" : "ml-4 "}>
                                            <h5 className="text-lg leading-6  text-gray-900 dark:text-white font-bold">
                                               The Design
                                            </h5>
                                            <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                            We design according to your needs based on the best technical standards.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-10">
                                    <div className={arabic ? "flex  flex-row-reverse" : "flex"}>
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12  rounded-full bg-gradient-to-b from-green-900 to-green-400 text-white shadow-lg animate-spin">

                                                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="h-6 w-6"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0ZM22,12a9.938,9.938,0,0,1-1.662,5.508l-1.192-1.193A.5.5,0,0,1,19,15.962V15a3,3,0,0,0-3-3H13a1,1,0,0,1-1-1v-.5a.5.5,0,0,1,.5-.5A2.5,2.5,0,0,0,15,7.5v-1a.5.5,0,0,1,.5-.5h1.379a2.516,2.516,0,0,0,1.767-.732l.377-.377A9.969,9.969,0,0,1,22,12Zm-19.951.963,3.158,3.158A2.978,2.978,0,0,0,7.329,17H10a1,1,0,0,1,1,1v3.949A10.016,10.016,0,0,1,2.049,12.963ZM13,21.949V18a3,3,0,0,0-3-3H7.329a1,1,0,0,1-.708-.293L2.163,10.249A9.978,9.978,0,0,1,17.456,3.63l-.224.224A.507.507,0,0,1,16.879,4H15.5A2.5,2.5,0,0,0,13,6.5v1a.5.5,0,0,1-.5.5A2.5,2.5,0,0,0,10,10.5V11a3,3,0,0,0,3,3h3a1,1,0,0,1,1,1v.962a2.516,2.516,0,0,0,.732,1.767l1.337,1.337A9.971,9.971,0,0,1,13,21.949Z" /></svg>


                                            </div>
                                        </div>
                                        <div className={arabic ? "ml-4 text-right mx-5" : "ml-4 "}>
                                            <h5 className="text-lg leading-6 text-gray-900 dark:text-white font-bold">
                                                Development
                                            </h5>
                                            <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                            Our development team develops the system and achieves the maximum flexibility.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-10">
                                    <div className={arabic ? "flex  flex-row-reverse" : "flex"}>
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-b from-green-900 to-green-400 text-white shadow-lg animate-spin">
                                                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="h-6 w-6"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0ZM22,12a9.938,9.938,0,0,1-1.662,5.508l-1.192-1.193A.5.5,0,0,1,19,15.962V15a3,3,0,0,0-3-3H13a1,1,0,0,1-1-1v-.5a.5.5,0,0,1,.5-.5A2.5,2.5,0,0,0,15,7.5v-1a.5.5,0,0,1,.5-.5h1.379a2.516,2.516,0,0,0,1.767-.732l.377-.377A9.969,9.969,0,0,1,22,12Zm-19.951.963,3.158,3.158A2.978,2.978,0,0,0,7.329,17H10a1,1,0,0,1,1,1v3.949A10.016,10.016,0,0,1,2.049,12.963ZM13,21.949V18a3,3,0,0,0-3-3H7.329a1,1,0,0,1-.708-.293L2.163,10.249A9.978,9.978,0,0,1,17.456,3.63l-.224.224A.507.507,0,0,1,16.879,4H15.5A2.5,2.5,0,0,0,13,6.5v1a.5.5,0,0,1-.5.5A2.5,2.5,0,0,0,10,10.5V11a3,3,0,0,0,3,3h3a1,1,0,0,1,1,1v.962a2.516,2.516,0,0,0,.732,1.767l1.337,1.337A9.971,9.971,0,0,1,13,21.949Z" /></svg>

                                            </div>
                                        </div>
                                        <div className={arabic ? "ml-4 text-right mx-5" : "ml-4 "}>
                                            <h5 className="text-lg leading-6 text-gray-900 dark:text-white font-bold">
                                                Empowerment
                                            </h5>
                                            <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                            The samples are delivered with the highest technical specification with time management
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={arabic ? "mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-2" : "mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1"}>
                            <img src={whyUs} alt="illustration" className="relative mx-auto rounded w-auto animate-pulse" />
                        </div>
                    </div>
                </div>



                <div className="w-full md:flex justify-center item-center md:-mt-10 sm:mt-20 sm:hidden">
                    <div className="w-full flex justify-center items-center">
                        <img src={Device} alt="about dp" className='md:w-1/2 skew-x-3 rotate-y-3 object-cover ' />

                    </div>
                </div>


            </div>

    </>
  )
}

export default Whyus
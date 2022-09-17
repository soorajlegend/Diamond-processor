import React from 'react'
import { IoSendSharp } from 'react-icons/io5'

function Chat({ title, data }) {


    return (
        <div>
            <section className="">
                <div className=" items-center px-5 py-12 lg:px-5">
                    <div className="flex flex-col w-full max-w-md p-3 mx-auto my-6 transition duration-500 ease-in-out transform shadow-2xl bg-white dark:bg-gray-900 rounded-lg md:mt-0">
                        <div className='py-2  flex justify-center'>
                            <p>{title}</p>
                        </div>
                        <div className='h-96 max-h-96 overflow-y-scroll'>
                           {data
                           .map((item) => (
                            <div  key={item.id} className= {item.sender == "admin" ? "flex w-full justify-end text-sm" : "flex w-full text-sm"}>
                            <p className={item.sender == "admin" ? "w-2/3  mx-5 rounded-xl my-2 px-10 py-5 dark:bg-gray-900 bg-gray-100 shadow-xl" : "w-2/3 mx-5 rounded-xl my-2 px-10 py-5 bg-gray-300/50 dark:bg-gray-700 shadow-xl"}>{item.message}</p>
                            </div>
                          ))
                           }
                        </div>
                        <div className="mt-8">
                            <div className='justify-end'>
                            <form action="#" method="POST" className="space-y-6">
                                    <div className='flex flex-row justify-start '>
                                        <div className='w-full'>
                                        <textarea className="block w-full h-12 px-5 rounded-full text py-3  text-base text-gray-600 placeholder-gray-400 dark:placeholder-gray-700 transition duration-500 ease-in-out transform border border-transparent bg-gray-200/50 dark:bg-gray-800 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 focus:ring-offset-gray-800 apearance-none autoexpand" id="description " row="1" type="text" name="description" placeholder="text here.." required=""></textarea>
                                        </div>
                                       <div>
                                        <span className="flex items-center justify-center w-10 h-10 p-2 mx-2 rounded-full py-2 text-base font-medium text-center text-gray-300 transition duration-500 ease-in-out transform bg-gradient-to-r from-green-400 to-green-800 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"><IoSendSharp /></span>
                                    </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Chat
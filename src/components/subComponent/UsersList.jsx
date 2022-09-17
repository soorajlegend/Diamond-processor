import React from 'react'

function UsersList({ title, data }) {
    return (
        <div>

            <div className="container flex flex-col mx-auto w-full items-center justify-center">
                <div class="px-4 py-5 sm:px-6 w-full dark:bg-gray-900 bg-white shadow mb-2 rounded-md">
                    <h3 class="text-lg leading-6 font-medium text-gray-700 dark:text-gray-500">
                        {title}
                    </h3>
                </div>
                <ul className="flex flex-col w-full">
                    {data.map((item) => (
                        <li key={item.id} className="border-gray-400 flex flex-row w-full mb-2">
                            <div className="transition shadow-xl duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-900 rounded-md flex flex-1 items-center p-4">
                              
                                <div className="flex-1 pl-1 md:mr-16">
                                    <div className="font-medium dark:text-gray-500">
                                        {item.name}
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-600 text-sm">
                                        {item.message}
                                    </div>
                                </div>

                                <button type="button" class="p-1 h-12 scale-50 w-12 text-xl m-2  rounded-full text-white bg-red-500">
                                    <span class="flex justify-center items-center">
                                        2
                                    </span>
                                </button>

                                <div className="text-gray-600 dark:text-gray-200 text-xs">
                                    {item.time}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default UsersList
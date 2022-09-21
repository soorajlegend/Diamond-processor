import React from 'react';
import { IoPencilSharp, IoTrashSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { Info } from '../../Context/InfoContext';
import { setAlert, setAlertStatus } from '../../slices/infoSlice';


function List({ title,data, DelUrl, functions }) {


 

  return (
    <div>
        
<div class="container flex flex-col mx-auto w-full items-center justify-center">
    <div class="px-4 py-5 sm:px-6 w-full dark:bg-gray-900 bg-white shadow mb-2 rounded-md">
        <h3 class="text-lg leading-6 font-medium text-gray-700 dark:text-gray-500">
            {title}
        </h3>
    </div>
    <ul class="flex flex-col">
        {data.map((item) => (
          <li key={item.id} class="border-gray-400 flex flex-row mb-2">
            <div class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800/20 shadow-xl rounded-md flex flex-1 items-center p-4">
                <div class="flex-1 pl-1 md:mr-16">
                    <div class="font-medium dark:text-gray-500">
                        {item.title}
                    </div>
                    <div class="text-gray-600 dark:text-gray-500 text-sm">
                        {item.description}
                    </div>
                </div>
                <div class="w-24 text-right flex justify-end">
                    <IoPencilSharp className='text-xl mx-2' />
                    <IoTrashSharp onClick={() => functions(item.id, DelUrl)} className='text-xl mx-2' />
                </div>
            </div>
        </li>  
        ))}
        
    </ul>
</div>

    </div>
  )
}

export default List
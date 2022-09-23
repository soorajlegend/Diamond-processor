import React from 'react'
import { useSelector } from 'react-redux';
import { selectArabic } from '../../slices/infoSlice';

function List({ data }) {

    const arabic = useSelector(selectArabic); 

    // console.log(data)
    // data.map((row) => (console.log(row.description)))
  return (

    <div className="w-full grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 ">
          {data.map((row) => 
        
        <div key={row.id} className={arabic ? "arabic-text space-y-3 text-right" : "space-y-3 text-left"}>
        <span className="inline-block  p-3 text-green-500 bg-green-100 rounded-xl dark:text-white dark:bg-gradient-to-b from-green-400 to-green-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        </span>

        <h1 className="text-2xl font-semibold  text-gray-700 capitalize dark:text-white">{row.title}</h1>

        <p className="text-gray-500  dark:text-gray-300">
          {row.description}
        </p>
    </div>

)}
    </div>
  
  )
}

export default List
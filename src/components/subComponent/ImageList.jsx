import React from 'react'
import { IoTrashSharp } from 'react-icons/io5'

// function List({ title,data, DelUrl, functions }) {
    function ImageList({images, DelUrl, functions}) {
    return (
        <div>
            <section className="overflow-hidden text-gray-700 ">
                <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        {images.map((item) => (
                            
                    <div key={item.id} className="flex flex-wrap md:p-2 my-2 w-1/2 shadow-xl">
                    <div className="w-full p-1 ">
                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-t-lg"
                            src={item.image}/>
                        <div className='w-full flex justify-around py-1 mb-2 bg-gray-50 rounded-b-lg'>
                            {/* <IoPencilSharp className='text-xl mx-2' /> */}
                            <IoTrashSharp onClick={() => functions(item.id, DelUrl)}  className='text-xl mx-2' />
                        </div>
                    </div>
                </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ImageList
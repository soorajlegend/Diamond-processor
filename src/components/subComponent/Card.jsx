import React from "react";
import { Link } from "react-router-dom";
import { IoListCircleOutline } from "react-icons/io5";

function Card({ content }) {

    Number.prototype.format = function (n, x) {
        var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
        return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
    };

    const formatter = (x) => x.format(0, 3, ',');

    return (
        <>
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}



            {content.map((item) => (
                <div key={item.id} className="bg-white   dark:bg-gray-800/50 rounded-lg h-fit py-5 pl-6 mx-5 md:mx-0 flex items-start shadow-xl">
                    <div className="text-gray-700 dark:text-gray-400">

                    <IoListCircleOutline className="text-3xl shadow-xl text-gray-7 dark:text-gray-300"/>
                    </div>
                    <div className="pl-3 pr-10 mt-1">
                        <h3 className="font-normal leading-4 text-gray-800 dark:text-gray-100 text-base">{item.title}</h3>
                        <div className="flex items-end mt-4">
                            <h2 className="text-gray-700 dark:text-gray-400 text-2xl leading-normal font-bold">{formatter(item.number)}</h2>
                        </div>
                        <div className="flex items-center mt-5">
                            <Link to={item.link} className="text-green-500 pointer inline-flex items-center md:mb-2 lg:mb-0">More details
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}


            {/* Card code block end */}
        </>
    );
}
export default Card;

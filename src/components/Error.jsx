import React from "react";
import { Link } from "react-router-dom";

const Error10 = () => {
    return (
        <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
            <div className="w-full lg:w-1/2">
                <img className="hidden lg:block" src="https://i.ibb.co/v30JLYr/Group-192-2.png" alt="" />
                <img className="hidden md:block lg:hidden" src="https://i.ibb.co/c1ggfn2/Group-193.png" alt="" />
                <img className="md:hidden" src="https://i.ibb.co/8gTVH2Y/Group-198.png" alt="" />
            </div>
            <div className="w-full flex flex-col lg:w-1/2 justify-center">
                <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-gray-400">Looks like you've found the doorway to the great nothing</h1>
                <p className="py-4 text-base text-gray-800 dark:text-gray-400">The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.</p>
                <p className="py-2 text-base text-gray-800 dark:text-gray-400">Sorry about that! Please visit our hompage to get where you need to go.</p>
                <Link to="/" className="flex max-w-[60%] justify-center item-center lg:w-auto my-2 border rounded-full px-1 sm:px-16 py-5 bg-gradient-to-b from-green-400 to-green-800 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 animate-pulse">Go back to Homepage</Link>
            </div>
        </div>
    );
};

export default Error10;

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo-mix.png';


export default function Nav() {
    return (
        <>
            <div className="fixed px-10 z-50 flex flex-row w-full bg-transparent dark:bg-gray-900/100 p-4 text justify-between">
                <div>
                    <img src={Logo} className="ml-8 h-6 sm:h-9 " alt="Logo"  /></div>
                <div className='flex absolute left-0 w-full justify-center item-center'>
                    <Link to="home" className='mw-[50px] py-2 px-5 pointer transition-1 bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r from-green-400 to-green-800 rounded-full mx-2 hover:text-white capitalize transition-transform hover:scale-120 hover:shadow-lg' >Home</Link>
                    <Link to="home" className='mw-[50px] py-2 px-5 pointer transition-1 bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r from-green-400 to-green-800 rounded-full mx-2 hover:text-white capitalize transition-transform hover:scale-120 hover:shadow-lg' >About us</Link>
                    <Link to="home" className='mw-[50px] py-2 px-5 pointer transition-1 bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r from-green-400 to-green-800 rounded-full mx-2 hover:text-white capitalize transition-transform hover:scale-120 hover:shadow-lg' >Our Services</Link>
                    <Link to="home" className='mw-[50px] py-2 px-5 pointer transition-1 bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r from-green-400 to-green-800 rounded-full mx-2 hover:text-white capitalize transition-transform hover:scale-120 hover:shadow-lg' >contact us</Link>
                    <Link to="home" className='mw-[50px] py-2 px-5 pointer transition-1 bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r from-green-400 to-green-800 rounded-full mx-2 hover:text-white capitalize transition-transform hover:scale-120 hover:shadow-lg' >Login</Link>
                </div>
                <div className="social h-full justify-center item-center -mt-10 hidden">
                    <a href="#" className="w-10 h-10 rounded-full flex-row mx-1  mt-10 py-2 px-3 shadow-lg cursor-pointer text-white justify-center item-center bg-gradient-to-r from-green-400 to-green-900 transition-colors hover:scale-120 hover:bg-gradient-to-r hover:from-green-900 hover:t0-green-400"><span>w</span></a>
                    <a href="#" className="w-10 h-10 rounded-full flex-row mx-1  mt-10 py-2 px-3 shadow-lg cursor-pointer text-white justify-center item-center bg-gradient-to-r from-green-400 to-green-900 transition-colors hover:scale-120 hover:bg-gradient-to-r hover:from-green-900 hover:t0-green-400"><span>w</span></a>
                    <a href="#" className="w-10 h-10 rounded-full flex-row mx-1  mt-10 py-2 px-3 shadow-lg cursor-pointer text-white justify-center item-center bg-gradient-to-r from-green-400 to-green-900 transition-colors hover:scale-120 hover:bg-gradient-to-r hover:from-green-900 hover:t0-green-400"><span>w</span></a>
                    <a href="#" className="w-10 h-10 rounded-full flex-row mx-1  mt-10 py-2 px-3 shadow-lg cursor-pointer text-white justify-center item-center bg-gradient-to-r from-green-400 to-green-900 transition-colors hover:scale-120 hover:bg-gradient-to-r hover:from-green-900 hover:t0-green-400"><span>w</span></a>
                    <a href="#" className="w-10 h-10 rounded-full flex-row mx-1  mt-10 py-2 px-3 shadow-lg cursor-pointer text-white justify-center item-center bg-gradient-to-r from-green-400 to-green-900 transition-colors hover:scale-120 hover:bg-gradient-to-r hover:from-green-900 hover:t0-green-400"><span>w</span></a>
                    <a href="#" className="w-10 h-10 rounded-full flex-row mx-1  mt-10 py-2 px-3 shadow-lg cursor-pointer text-white justify-center item-center bg-gradient-to-r from-green-400 to-green-900 transition-colors hover:scale-120 hover:bg-gradient-to-r hover:from-green-900 hover:t0-green-400"><span>w</span></a>
                </div>
            </div>
        </>
    )
}

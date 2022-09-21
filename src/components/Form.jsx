import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, Router, Routes, useNavigate } from 'react-router-dom';
import { selectArabic } from '../slices/infoSlice';
import { selectControlAccess, setControlAccess } from "../slices/infoSlice";
import { UserAuth } from '../Context/AuthContext';




function Form() {

    const arabic = useSelector(selectArabic);
    const dispatch = useDispatch();

    const access = useSelector(selectControlAccess);
    const changeAccess = () => dispatch(setControlAccess(access ? false : true));


    const title = arabic ? "تسجيل الدخول" : "Sign in.";
    const email = arabic ? "عنوان البريد الالكترونى" : "Email address";
    const emailPlh = arabic ? "بريدك الالكتروني" : "Your email";
    const password = arabic ? "كلمة المرور" : "Password";
    const passwordPlh = arabic ? "كلمة السر خاصتك" : "Your password";
    const Remember = arabic ? "تذكرنى" : "Remember me";
    const forgot = arabic ? "نسيت رقمك السري؟" : "Forgot your password?";
    const Or = arabic ? "" : "Or continue with";
    const google = arabic ? "تسجيل الدخول عبر جوجل" : "Log in with Google";


    // const login = { email: "soorajwizard01@gmail.com", password: "12345" };
    const  {login}  =  UserAuth();

    const [emailLog, setEmailLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const Submit = async (e) => {
        setError('')
        try{
            await login(emailLog, passwordLog)
            navigate('/controlpanel');
        } catch (e) {
            setError(e.message)
            console.log(e.message);
        }
    }

    return (
        <div>

            <section className=" overflow-hidden">
                <div className="flex min- overflow-hidden">
                    <div className="relative flex-1 hidden w-0 overflow-hidden lg:block">
                    </div>
                    <div className="flex flex-col justify-center flex-1 px-4 py-12 overflow-hidden sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                        <div className="w-full max-w-xl mx-auto lg:w-96">
                            <div>
                                <h2 className={arabic ? "arabic-text mt-6 text-3xl font-extrabold text-right text-gray-600" : "mt-6 text-3xl font-extrabold text-left text-gray-600"}>{title}</h2>
                            </div>

                            <div className="mt-8">
                                <div className="mt-6">
                                    <form action="#" method="POST" className="space-y-6">
                                        <div>
                                            <label htmlFor="email" className={arabic ? "arabic-text block text-sm font-medium text-right text-gray-600" : "block text-sm font-medium text-gray-600"}>{email} </label>
                                            <div className="mt-1">
                                                <input id="email" name="email" type="email" autoComplete="email" onChange={(e) => setEmailLog(e.target.value)} required="" placeholder={emailPlh} className={arabic ? "arabic-text block w-full text-right px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" : "block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"} />
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label htmlFor="password" className={arabic ? "arabic-text block text-sm text-right font-medium text-gray-600" : "block text-sm font-medium text-gray-600"}> {password} </label>
                                            <div className="mt-1">
                                                <input id="password" name="password" type="password" autoComplete="current-password" onChange={(e) => setPasswordLog(e.target.value)} required="" placeholder={passwordPlh} className={arabic ? "arabic-text block w-full text-right px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" : "block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"} />
                                            </div>
                                        </div>

                                        <p className='text-red-700 text-sm'>{error}</p>

                                        <div className={arabic ? "arabic-text flex items-center flex-row-reverse justify-between" : "flex items-center justify-between"}>
                                            <div className={arabic ? "arabic-text flex flex-row-reverse justify-between items-center" : "flex       justify-between items-center"}>
                                                <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password" className="w-4 h-4 text-green-600 dark:bg-gray-800 border-gray-200 rounded focus:ring-green-500" />
                                                <label htmlFor="remember-me" className={arabic ? "arabic-text block mr-2 text-sm text-gray-600" : "block ml-2 text-sm text-gray-600"}>{Remember}</label>
                                            </div>

                                            <div className="text-sm">
                                                <a href="#" className="font-medium text-green-600 hover:text-green-500">{forgot}</a>
                                            </div>
                                        </div>

                                        <div>
                                            <span onClick={() => Submit()} className="flex pointer items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-gradient-to-b from-green-400 to-green-800 rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 " >{title}</span>
                                        </div>
                                    </form>
                                    <div className="relative my-4">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-300 dark:border-gray-500"></div>
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-2 text-gray-600 bg-white dark:bg-gray-900">{Or}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-gray-500 transition duration-500 ease-in-out transform border-2 dark:border-gray-500 border-gray-50 shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                                            <div className="flex items-center justify-center">

                                                <span className="ml-4">{google}</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Form
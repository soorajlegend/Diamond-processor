import React from 'react';
import { IoCameraSharp, IoDiamond, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoSnapchat, IoLogoTiktok, IoLogoWhatsapp, IoSendOutline, IoSendSharp } from 'react-icons/io5';
import SideBar from '../../components/SideBar';
import AnimatedPage from '../../animation.js';
import UsersList from '../../components/subComponent/UsersList';
import Chat from '../../components/subComponent/Chat';
import { useSelector } from 'react-redux';
import { selectControlAccess } from '../../slices/infoSlice';
import { Navigate } from 'react-router-dom';

function Messages() {
    const access = useSelector(selectControlAccess);


    // if (!access) {
    //     return (
    //         <Navigate to="/" replace={true} />
    //     )
    // } else {

        const data = [
            { id: 1, name: "sooraj-wizard01@gmail.com", message: "By using render prop you can pass a function as a component and also share props from parent itself" },
            { id: 2, name: "sooraj-wizard01@gmail.com", message: "By using render prop you can pass a function as a component and also share props from parent itself" },
            { id: 3, name: "sooraj-wizard01@gmail.com", message: "By using render prop you can pass a function as a component and also share props from parent itself" },
            { id: 4, name: "sooraj-wizard01@gmail.com", message: "By using render prop you can pass a function as a component and also share props from parent itself" },
            { id: 5, name: "sooraj-wizard01@gmail.com", message: "By using render prop you can pass a function as a component and also share props from parent itself" },
        ]

        const messages = [
            { id: 1, sender: "user", receiver: "admin", message: "By using render prop you can pass a function as a component ", time: "12:00 Am", status: 1 },
            { id: 2, sender: "User", receiver: "admin", message: "By using render prop you can pass a function as a component ", time: "12:00 Am", status: 2 },
            { id: 3, sender: "admin", receiver: "sooraj", message: "By using render prop you can pass a function as a component ", time: "12:00 Am", status: 1 },
            { id: 4, sender: "user", receiver: "admin", message: "By using render prop you can pass a function as a component ", time: "12:00 Am", status: 3 },
            { id: 5, sender: "admin", receiver: "sooraj", message: "By using render prop you can pass a function as a component ", time: "12:00 Am", status: 1 },
        ]
        return (
            <div className='flex flex-row'>
                <SideBar />
                <div className='block md:flex flex-col w-full  md:px-10 py-20 item-center justify-center'>

                    <AnimatedPage>
                        <div className="relative mb-20 md:-ml-10 md:-mt-[5rem] ">
                            <div className="flex flex-row-reverse w-full  max-w-sm overflow-hidden bg-white rounded-r-lg shadow-sm md: dark:bg-gray-800">
                                <div className="flex items-center justify-center w-12 bg-emerald-500">
                                    <IoDiamond className='text-xl' />
                                </div>

                                <div className="px-4 py-2 w-full">
                                    <div className="flex justify-center md:justify-start w-full">
                                        <span className="font-semibold text-2xl  text-emerald-500 dark:text-emerald-400">Message</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className=" grid grid-cols-1 gap-6 -mt-10 md:grid-cols-2 ">
                            <UsersList title="Our services " data={data} />
                            <Chat title="soorajwizard01@gmail.com" data={messages} />
                        </div>
                    </AnimatedPage>

                </div>
            </div >
        )
    }
// }

export default Messages
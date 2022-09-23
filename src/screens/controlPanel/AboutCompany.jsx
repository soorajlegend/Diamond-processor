import React, { useEffect, useState } from 'react';
import {  IoDiamond,  } from 'react-icons/io5';
import SideBar from '../../components/SideBar';
import AnimatedPage from '../../animation.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectAlertStatus, setAlert, setAlertStatus } from '../../slices/infoSlice';
import { Info } from '../../Context/InfoContext';



function AboutCompany() {

    const { info, updateDesc } = Info();

    const Status = useSelector(selectAlertStatus);

    const Alert = (e) => {
        if (Status) {
            dispatch(setAlert(false));
    }
    setTimeout(() => {
        dispatch(setAlert(e));
        dispatch(setAlertStatus(true))
    }, 10)

    setTimeout(() => {
        dispatch(setAlertStatus(false))
    }, 5000)

    }

    useEffect(() => {
        setDescription(info.data.description);
        setMission(info.data.mission);
        setVission(info.data.vission);
        console.log(info)
    }, [info.loading])


    const dispatch = useDispatch();

    const [description, setDescription] = useState(info.data.description);
    const [mission, setMission] = useState(info.data.mission);
    const [vission, setVission] = useState(info.data.vission);

    const updateAbout = async (e) => {
        e.preventDefault()

        const info = { description, mission, vission };
        // setLoading(true)
        let response = await fetch('https://biapay.000webhostapp.com/DP/api/info/aboutDp.php', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info)
        });
        response = await response.json();
        // setLoading(false)
        if (!response.error) {
            Alert(response.message);
            updateDesc(description,mission,vission);
            console.log(info)

        } else {
            console.log(response.message)

        }
    }


    return (
        <div className='flex flex-row'>
            <SideBar />
            <div className='block md:flex w-full md:flex-col md:px-10 py-20 item-center justify-center'>

                <AnimatedPage>
                    <div className="relative z-10 md:-ml-10 md:-mt-[4rem]">
                        <div className="flex flex-row-reverse w-full relative z-10 max-w-sm overflow-hidden bg-white rounded-r-lg shadow-sm md: dark:bg-gray-800">
                            <div className="flex items-center justify-center w-12 bg-emerald-500">
                                <IoDiamond className='text-xl' />
                            </div>

                            <div className="px-4 py-2 w-full">
                                <div className="flex justify-center md:justify-start w-full">
                                    <span className="font-semibold text-2xl  text-emerald-500 dark:text-emerald-400">About Company</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={updateAbout} className="w-full flex justify-center md:-mt-4 px-3 md:px-24">
                        <div className=" grid grid-cols-1 w-full gap-6 mt-8 md:grid-cols-2  ">
                            <div className='row-span-3 col-span-full '>

                                <label className="text-gray-700" htmlFor="name">Company description</label>
                                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="block w-full px-5 py-3 mt-2 text-base text-gray-600 placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-200/90 dark:bg-gray-800 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500 apearance-none autoexpand" id="description " type="text" name="description" placeholder="Description here..." rows="6" required=""></textarea>
                            </div> <div className='row-span-3 my-5'>
                                <label className="text-gray-700" htmlFor="name">Mission</label>
                                <textarea onChange={(e) => setMission(e.target.value)} value={mission} className="block w-full px-5 py-3 mt-2 text-base text-gray-600 placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-200/90 dark:bg-gray-800 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500 apearance-none autoexpand" id="" type="text" name="description" placeholder="mission here..." rows="6" required=""></textarea>

                            </div> <div className='row-span-3 my-5'>
                                <label className="text-gray-700" htmlFor="name">Vission</label>
                                <textarea onChange={(e) => setVission(e.target.value)} value={vission} className="block w-full px-5 py-3 mt-2 text-base text-gray-600 placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-200/90 dark:bg-gray-800 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500 apearance-none autoexpand" id=" " type="text" name="description" placeholder="vission here..." rows="6" required=""></textarea>

                            </div>

                            <div className='flex justify-end col-span-full'>
                                <button type='submit' className="flex items-center justify-center h-10 w-full md:w-1/5 px-10 py-3 shadow-2xl text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-gradient-to-b from-green-500 to-green-800 rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-green-500 ">Save</button>
                            </div>
                        </div>
                    </form>

                </AnimatedPage>

            </div>
        </div>
    )
}
// }

export default AboutCompany
import React, { useEffect, useState } from 'react';
import { IoDiamond } from 'react-icons/io5';
import SideBar from '../../components/SideBar';
import AnimatedPage from '../../animation.js';
import List from '../../components/subComponent/List';
import { useDispatch, useSelector } from 'react-redux';
import { Info } from '../../Context/InfoContext';
import { selectAlertStatus, setAlert, setAlertStatus } from '../../slices/infoSlice';

function WhyUs() {


    const { features, addFeature, RemoveFeature } = Info();

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
        setData(features.data);
        console.log(features.data)
    }, [features.loading]);
    const dispatch = useDispatch();

    const [data, setData] = useState(features.data)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const SaveFeature = async (e) => {
        e.preventDefault()

        const info = { title, description };
        // setLoading(true)

        if (title.length < 1 || description.length < 1) {

            console.log('all these field are required');

        } else {

            let response = await fetch('http://localhost/dpAPI/api/Features/create.php', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(info)
            });
            response = await response.json();
            // setLoading(false)
            if (!response.error) {
                Alert(response.message);
                let newService = { id: response.id, title: title, description: description };
                addFeature(newService);
                console.log(features.data)


            } else {
                // history.push('/')
                console.log(response.message);

            }
        }
    }


    const DeleteFeature =(e, url) => {
        fetch(url + e, {
        method: "DELETE"
    });
    RemoveFeature(e);
    Alert('Deleted successfully');
    }

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
                                        <span className="font-semibold text-2xl  text-emerald-500 dark:text-emerald-400">Why us</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className=" grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 ">

                            <section className="">
                                <div className=" items-center px-5 py-12 lg:px-20">
                                    <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform shadow-2xl bg-white dark:bg-gray-900 rounded-lg md:mt-0">
                                        <div className="mt-8">
                                            <div className="mt-6">
                                            <form onSubmit={SaveFeature} action="#" method="POST" className="space-y-6">
                                                <p className='text-gray-500'>Add new service</p>
                                                <div>
                                                    <label for="email" className="block text-sm font-medium text-gray-600">Service</label>
                                                    <div className="mt-1">
                                                        <input name="text" required="" onChange={(e) => setTitle(e.target.value)} type="text" autocomplete="title"  placeholder="Service title" className="block w-full px-5 py-3 text-base text-gray-600 bg-gray-200/90 dark:bg-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label for="email" className="block text-sm font-medium text-gray-600"> Description</label>
                                                    <textarea require="" onChange={(e) => setDescription(e.target.value)} className="block w-full px-5 py-3 mt-2 text-base text-gray-600 placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-200/90 dark:bg-gray-800 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500 apearance-none autoexpand" id="description " type="text" name="description" placeholder="Description here..."></textarea>
                                                </div>
                                                <div>
                                                    <button type='submit' className="flex items-center justify-center w-full px-10 py-2 text-base font-medium text-center text-gray-300 transition duration-500 ease-in-out transform bg-gradient-to-r from-green-400 to-green-800 rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Save</button>
                                                </div>
                                            </form>
                                                <div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        {data != null && <List title="Our services" data={data} functions={DeleteFeature} DelUrl="https://biapay.000webhostapp.com/DP/api/features/delete.php?id=" />}
                        </div>


                    </AnimatedPage>

                </div>
            </div >
        )
    }
// }
export default WhyUs
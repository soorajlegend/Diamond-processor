import React, { useEffect, useState } from 'react';
import { IoDiamond } from 'react-icons/io5';
import SideBar from '../../components/SideBar';
import AnimatedPage from '../../animation.js';
import { selectAlertStatus, setAlert, setAlertStatus } from '../../slices/infoSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Info } from '../../Context/InfoContext';
import ListWithImage from '../../components/subComponent/ListWithImage';

function ClientControl() {


    const [client, setClient] = useState();
    const [selectedFile, setSelectedFile] = useState();


    const dispatch = useDispatch();

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const url = 'https://biapay.000webhostapp.com/DP/api/clients/ImgUpload.php';

    const submitHandler = (e) => {
        e.preventDefault();
        Addclient(selectedFile)
    }

    const { Clients, addClient, RemoveClient } = Info();


    const [data, setData] = useState(Clients.data)

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
        setData(Clients.data);
    }, [Status,Clients]);

    const Addclient = (file) => {
        const formData = new FormData();
        formData.append('avatar', file)
        formData.append('title', client)
        axios({
            url: url,
            method: "POST",
            headers: { 'content-type': 'multipart/form-data' },
            data: formData

        }).then((res) => {
            console.log(res.data)
            let response = res.data;
            Alert('Uploaded successfully');
            dispatch(setAlertStatus(true))

            let newClient = { id: response.id, name: client, image: response.image };
            addClient(newClient);

        }, (err) => {
            console.log(err);;
        })
        // console.log(res);
    }


    const DeleteClient = (e, url) => {
        axios({
            url: url + e,
            method: "POST",
            headers: { 'content-type': 'multipart/form-data' },

        }).then(() => {
            RemoveClient(e);
            Alert('Deleted successfully');
        });


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
                                    <span className="font-semibold text-2xl  text-emerald-500 dark:text-emerald-400">Clients</span>
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
                                            <form onSubmit={submitHandler} className="space-y-6">
                                                <p className='text-gray-500'>Add new future</p>
                                                <div>
                                                    <label HtmlFor="email" className="block text-sm font-medium text-gray-600">Client's Name</label>
                                                    <div className="mt-1">
                                                        <input name="title" onChange={(e) => setClient(e.target.value)} type="text" autocomplete="title" required="" placeholder="Client name" className="block w-full px-5 py-3 text-base text-gray-600 bg-gray-200/50 dark:bg-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-500" />
                                                    </div>
                                                </div>
                                                <div>

                                                    <div class="flex justify-center">
                                                        <div class="mb-3 w-96">
                                                            <label HtmlFor="formFile" class="block my-2 text-sm font-medium text-gray-600">Image upload</label>
                                                            <input onChange={changeHandler} class="form-control
                                                             block
                                                             w-full
                                                             px-3
                                                             py-2.5
                                                             text-base
                                                             font-normal
                                                             text-gray-700
                                                             bg-gray-200/50 bg-clip-padding
                                                            dark:bg-gray-800
                                                             rounded-lg
                                                             transition
                                                             ease-in-out
                                                             m-0
                                                             focus:text-gray-700 focus:border-gray-600 focus:outline-none" name='avatar' id='avatar' type="file" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button type="submit" className="flex items-center justify-center w-full px-10 py-2 text-base font-medium text-center text-gray-300 transition duration-500 ease-in-out transform bg-gradient-to-r from-green-400 to-green-800 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Save</button>
                                                </div>
                                            </form>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {data != null && <ListWithImage title="Our Clients" data={data} functions={DeleteClient} DelUrl="https://biapay.000webhostapp.com/DP/api/clients/delete.php?id=" />}


                    </div>


                </AnimatedPage>

            </div>
        </div >
    )
}
// }

export default ClientControl
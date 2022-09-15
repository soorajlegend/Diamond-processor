import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectClient, selectProject, selectUsers } from "../slices/infoSlice";



export default function Statistic() {

    const storeUsers = useSelector(selectUsers);
    const storeProject = useSelector(selectProject);
    const storeClient = useSelector(selectClient);

    const [users, SetUsers] = useState(0);
    const initialUsers = storeUsers;
    const [projects, SetProjects] = useState(0);
    const initialProjects = storeProject;
    const [clients, SetClients] = useState(0);
    const initialClients = storeClient;

    const increment = (initial, original, setInitial) => {
        if (initial < original) {
            var add = initial + 1;
            setInitial(add);
        } else {
            return initial;
        }
    }

    setTimeout(() => {
        increment(users, initialUsers, SetUsers);
        increment(clients, initialClients, SetClients);
        increment(projects, initialProjects, SetProjects);
    }, 1);



    return (
        <>
            <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container">

                <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                    <img src="https://i.ibb.co/KjrPCyW/map.png" alt="world map bg" className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden" />
                    <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" alt="mobile bg" className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0" />
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full px-20 rounded-xl bg-white dark:bg-gray-900/100 sm:absolute relative z-20  mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
                        <p className="text-3xl font-black text-gray-700 dark:text-gray-500">{users}</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Users</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full px-20 rounded-xl bg-white dark:bg-gray-900/100 sm:absolute relative z-20 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                        <p className="text-3xl font-black text-gray-700 dark:text-gray-500">{projects}</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Projects</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full px-20 rounded-xl bg-white dark:bg-gray-900/100 sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
                        <p className="text-3xl font-black text-gray-700 dark:text-gray-500">{clients}</p>
                        <p className=" text-base leading-4 xl:mt-4 mt-2 text-gray-600">Clients</p>
                    </div>
                </div>
            </div>
        </>
    );
}

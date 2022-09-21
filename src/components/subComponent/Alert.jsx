import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react'
import { IoCheckmarkDoneSharp, IoCloseCircleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { selectAlert, selectAlertStatus, setAlertStatus } from '../../slices/infoSlice';

function Alert() {

    const alert = useSelector(selectAlert);


    const alertStatus = useSelector(selectAlertStatus);

    const [flag, setFlag] = useState(alert);
    
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(setAlertStatus(false));
        setFlag(!flag)

    }

    if(alertStatus){
         return (
        <div role="alert" className={flag ? " sm:mr-6 mt-10 sm:mt-6 mb-6 sm:mb-0 xl:w-5/12 mx-auto fixed z-[1000] right-0 top-0 sm:left-auto  sm:top-0 sm:w-1/2 w-10/12 rounded flex justify-end md:w-full pr-4 py-4 translate-show transition duration-150 ease-in-out" : "fixed z-[1000]  translate-hide"}>
            {/*code for notification starts*/}
            <div id="alert-3" className="flex p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-100 shadow-xl transition duration-150 ease-in-out" role="alert">
                <IoCheckmarkDoneSharp aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800" />
                <span className="sr-only">Sucess</span>
                <div className="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
                   {alert}
                </div>
                <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-700 rounded-full focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300" data-dismiss-target="#alert-3" aria-label="Close">
                    <span className="sr-only">Close</span>
                    <svg onClick={() => clickHandler()} aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <style>
                {`
                .translate-show{
                    transform : translateX(0%);
                }
                .translate-hide{
                    transform : translateX(150%);
                }
                `}
            </style>
        </div>
    );
    }
   
};

export default Alert
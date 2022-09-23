import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoCameraSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Info } from '../Context/InfoContext';
import Logo from '../images/logo-mix.png';
import { selectAlertStatus, setAlert, setAlertStatus } from '../slices/infoSlice';


function Upload() {

    const [selectedFile, setSelectedFile] = useState();

    const Status = useSelector(selectAlertStatus);

    const { info, updateLogo } = Info();

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
        setLogo(info.data.Logo);
    }, [info])


    const dispatch = useDispatch();


    const SaveImage =(url) => {
        fetch(url , {
        method: "POST"
    });
}
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]).then(() => {
        document.querySelector('#upload').click()
        })
    };

    const UPLOAD_ENDPOINT = 'https://biapay.000webhostapp.com/DP/api/info/ImgUpload.php';

    const submitHandler = (e) => {
        e.preventDefault();
        uploadFile(selectedFile)
    }


    const [logo, setLogo] = useState(Logo);

    const uploadFile = (file) => {
        const formData = new FormData();
        formData.append('avatar', file)
        axios({
            url: UPLOAD_ENDPOINT,
            method: "POST",
            headers: { 'content-type': 'multipart/form-data' },
            data: formData

        }).then((res) => {
            let image = 'https://biapay.000webhostapp.com/DP/api/info/images/' + res.data.image;
            
            SaveImage('https://biapay.000webhostapp.com/DP/api/info/dpImage.php?image='+image);

            updateLogo(image);            
            Alert('Uploaded successfully');

        }, (err) => {
            console.log(err);;
        })
        // console.log(res);
    }

    return (



        <div>
            {/* content={{title: 'success', status: true, message: 'hello'}} */}
            <form onSubmit={submitHandler} id='imageUploadForm' className='flex flex-col justify-center item-center pt-10'>
                <IoCameraSharp className='absolute text-2xl text-gray-700 -mr-20 -mb-10 center' onClick={() => document.querySelector('#avatar').click()} />
                <img alt="profile"  src={info.data.Logo === '' ? logo : info.data.Logo} className="mx-auto relative z-20 object-contain shadow-lg rounded-full h-20 w-20 " />
                <div className='flex flex-row justify-center item-center'>
                    <input type='file' onChange={changeHandler} name='avatar' id='avatar' className='py-2 px-5 rounded-lg hidden' required />
                    <button type='submit' id="upload" className='px-2 py-3 rounded-lg hidden'>upload</button>
                </div>
            </form>

        </div>
    )
}

export default Upload
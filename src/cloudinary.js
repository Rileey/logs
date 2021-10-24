import React, { useState } from 'react';
import axios from 'axios';
import { Image } from 'cloudinary-react';

const Cloudinary = () => {

    const [video, setVideo] = useState('')


    const uploadImage = () => {
        const formData = new FormData();
        formData.append('file', video);
        formData.append('upload_preset', 'preset')

        axios.post('https://api.cloudinary.com/v1_1/rileey/video/upload', formData)
        .then((response) => {
            console.log(response);
        });
    };

    return(
        <div>
            <input type="file" onChange={(e)=> {setVideo(e.target.files[0])}}/>
            <button onClick={uploadImage}>Upload</button>
            <Image cloudName='rileey' publicId='qzhemp26kmvxaaswlxlo'/>
        </div>
    )
}


export default Cloudinary;
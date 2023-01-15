import React from 'react';
import useStorage from "../hooks/useStorage";

const ImageUpload = ({ file, setFile }) => {
    const {url} = useStorage(file);

    return (
        <div></div>
    )

}


export default ImageUpload;
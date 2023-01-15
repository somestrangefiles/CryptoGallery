import React, { useState, useContext } from 'react';
import { useStorage } from '../hooks/useStorage';
import ImageUpload from './ImageUpload';
import { CryptoGalleryContext } from "../context/CryptoGalleryContext";

const UploadForm = () => {

    const { isOwnerAccount } = useContext(CryptoGalleryContext);

    const [file, setFile] = useState(null);

    const img_types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if (selected && img_types.includes(selected.type)) {
            setFile(selected);
        }
        else {
            setFile(null);
        }
    }

    return (
        <form>
            { isOwnerAccount && <input className='fileField' type="file" onChange={changeHandler} /> }
            { file && <ImageUpload file={file} setFile={setFile} />}
        </form>
    )
}

export default UploadForm;
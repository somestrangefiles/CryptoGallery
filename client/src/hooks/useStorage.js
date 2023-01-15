import { useState, useEffect } from 'react';
import app from '../firebase/config';

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import 'firebase/storage';

import { getFirestore, addDoc, collection } from "firebase/firestore"; 



const useStorage = (file) => {
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null); 

    const db = getFirestore(app);

    useEffect(() => {
        const storage = getStorage();
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', (snap) => {

        }, (err) => {
            setError(err);
        }, async () => {
            
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                setUrl(downloadURL);
                try {
                    const docRef = await addDoc(collection(db, "images"), {
                        createdAt: Date.now(),
                        url: downloadURL,
                    });
                    console.log("ADDED");
                  } catch (err) {
                        console.error(err);
                  }
              });
            
        })
    }, [file]);

    return { error, url };
}

export default useStorage;
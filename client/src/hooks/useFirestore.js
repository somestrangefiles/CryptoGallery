import { useState, useEffect } from 'react';
import { collection, getFirestore, query, onSnapshot, orderBy } from 'firebase/firestore';

import app from '../firebase/config';



const useFirestore = () => {

    const db = getFirestore(app);

    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const imagesRef = collection(db, "images");
        const q = query(imagesRef, orderBy("createdAt", "desc"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({...doc.data(), id: doc.id});
            });
            setDocs(documents);
        })

        return () => unsub();

    }, ["images"]);


    return { docs };

}

export default useFirestore;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import "firebase/storage";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1CDNLHZ9taL6wjEEwlMgvDssSB_qj4mQ",
  authDomain: "cryptogallery-3482f.firebaseapp.com",
  projectId: "cryptogallery-3482f",
  storageBucket: "cryptogallery-3482f.appspot.com",
  messagingSenderId: "308145139836",
  appId: "1:308145139836:web:843a7cbb31a53785a1d9f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFqBaG3e-RgkEon4DnpqlFb4MFtkoFIlw",
  authDomain: "colour-palette-cf274.firebaseapp.com",
  projectId: "colour-palette-cf274",
  storageBucket: "colour-palette-cf274.appspot.com",
  messagingSenderId: "604037321881",
  appId: "1:604037321881:web:28bfd9d6d1ecbd2bab5408",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
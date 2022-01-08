// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASPIhV2nHs8ul-WCmquK4Vo-Z-ukuKZrg",
  authDomain: "facebook-messenger-8f1b3.firebaseapp.com",
  projectId: "facebook-messenger-8f1b3",
  storageBucket: "facebook-messenger-8f1b3.appspot.com",
  messagingSenderId: "888417888979",
  appId: "1:888417888979:web:cdd8acdd6a3a8c10628226",
};

// Initialize Firebase
//eslint-disable-next-line
const app = initializeApp(firebaseConfig);

export default getFirestore();
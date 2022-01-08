// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAddPvSw2SPWfpinv9hPu2ccOZ90VEtfK8",
  authDomain: "authentication-51jg9.firebaseapp.com",
  projectId: "authentication-51jg9",
  storageBucket: "authentication-51jg9.appspot.com",
  messagingSenderId: "137330876851",
  appId: "1:137330876851:web:6a0bad5dad5aefe5c4ebc6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

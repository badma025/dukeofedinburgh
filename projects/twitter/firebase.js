// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu14zw5zQvOawlZWb6_4DjfIy6Az7QnBA",
  authDomain: "twitter-000.firebaseapp.com",
  databaseURL:
    "https://twitter-000-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "twitter-000",
  storageBucket: "twitter-000.appspot.com",
  messagingSenderId: "398488086920",
  appId: "1:398488086920:web:72ebed2214fbd77e9bf23d",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth()

export default app;
export { db, storage, auth };

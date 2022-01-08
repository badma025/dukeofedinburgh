// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD75-UseRmjTx_I0rkLJhOjcYKBL4v0tD8",
  authDomain: "facebook-messenger-2-be63c.firebaseapp.com",
  projectId: "facebook-messenger-2-be63c",
  storageBucket: "facebook-messenger-2-be63c.appspot.com",
  messagingSenderId: "789914273438",
  appId: "1:789914273438:web:786f9897ae7753af18dd8f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new FacebookAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

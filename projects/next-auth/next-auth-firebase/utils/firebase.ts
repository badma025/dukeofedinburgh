// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBgLfwLDgO-4AULfcP0Y1_1zvhs3_hvG5A',
  authDomain: 'next-auth-fireba.firebaseapp.com',
  projectId: 'next-auth-fireba',
  storageBucket: 'next-auth-fireba.appspot.com',
  messagingSenderId: '619305062660',
  appId: '1:619305062660:web:5e249c4117a7a1384c8051',
  measurementId: 'G-2NRV922JLM',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export {app,db, storage, auth}
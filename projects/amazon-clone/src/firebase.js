// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8R-fWMkaq5Uzvuq75yKDr-D5BHYuvJtU",
  authDomain: "clone-c8921.firebaseapp.com",
  projectId: "clone-c8921",
  storageBucket: "clone-c8921.appspot.com",
  messagingSenderId: "991556860805",
  appId: "1:991556860805:web:1d4511feb6e7df6a29a2ec",
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// function which creates the user
// takes in three arguments; the connection to the authentication, the email and password
function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

function logout() {
  return signOut(auth);
}

// function which logs in the user
// takes in three arguments; the connection to the authentication, the email and password
function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}



export { signup, logout, login, auth };

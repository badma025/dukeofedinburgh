// onAuthStateChanged is like onSnapshot but with authentication
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBQzThbbtkB6xV0YmMIl14UaKe6il1C2ko",
  authDomain: "authentication-ef775.firebaseapp.com",
  projectId: "authentication-ef775",
  storageBucket: "authentication-ef775.appspot.com",
  messagingSenderId: "551292537149",
  appId: "1:551292537149:web:4674a34ff94bc999ac9d54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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
function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// custom hook
function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    //   so when the authentication state changes the user is set
    // we have set that to the variable user, to which we can get the password and email
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      return unsub;
    });
  }, []);
  return currentUser;
}

export { signup };
export { logout };
export { signIn };
export { useAuth };

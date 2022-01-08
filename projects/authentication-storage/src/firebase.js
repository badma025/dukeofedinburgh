// onAuthStateChanged is like onSnapshot but with authentication
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-k78z8cYgta2-XC9zZb7HNJdCJ2M1l_8",
  authDomain: "authentication-storage-97516.firebaseapp.com",
  projectId: "authentication-storage-97516",
  storageBucket: "authentication-storage-97516.appspot.com",
  messagingSenderId: "288799108548",
  appId: "1:288799108548:web:a299d2aae7836aceac8891",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

// function which creates the user
// takes in three arguments; the connection to the authentication, the email and password
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// function which logs in the user
// takes in three arguments; the connection to the authentication, the email and password
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// custom hook
export function useAuth() {
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

// storage
export async function upload(file, user, setLoading) {
  // this is how you make a refrence to the storage
  // takes in two arguments; the connection to the storage and the location (url of the file)
  //
  const fileRef = ref(storage, `images/${user.uid}.png`);

  setLoading(true);

  // the uploadBytes() takes in two arguments; the connection to the storage and the file we upload
  const snapshot = await uploadBytes(fileRef, file);

  // the getDownloadURL takes 1 argument; the reference we want to get the file off
  const photoURL = await getDownloadURL(fileRef);

  // we update the user here
  updateProfile(user, {
    photoURL: photoURL,
  });
  console.log(user);
  setLoading(false);
  alert("Uploaded file!");
}

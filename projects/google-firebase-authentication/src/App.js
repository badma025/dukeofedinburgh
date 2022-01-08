import React from "react";
import "./App.css";
import { auth, provider } from "./utils/firebase";
import { signInWithPopup } from "firebase/auth";

function App() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="App">
      <h1>Let's build google authentication</h1>

      <button onClick={signInWithGoogle}>login</button>
    </div>
  );
}

export default App;

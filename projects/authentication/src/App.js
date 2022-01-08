import React, { useRef, useState } from "react";
import { signup, useAuth, logout, login } from "./firebase";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(false);
  let currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  // it is an API call so function needs to be asyncronous
  // signs up our user
  async function handleSignup() {
    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Email is already in use!");
    }
    setLoading(false);
  }

  async function handleLogOut() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogin() {
    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Incorrect email or password.");
    }
    setLoading(false);
  }

  return (
    <div id="main">
      <div>Currently logged in as: {currentUser?.email}</div>
      <div id="fields">
        <input type="email" ref={emailRef} placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
      </div>

      <button disabled={loading || currentUser} onClick={handleSignup}>
        Sign Up
      </button>
      <button onClick={handleLogOut} disabled={loading || !currentUser}>
        Log Out
      </button>
      <button onClick={handleLogin} disabled={currentUser}>
        Log In
      </button>
    </div>
  );
}

export default App;

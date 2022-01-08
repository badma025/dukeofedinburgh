import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { signup, login } from "../../../firebase";

function Login() {
  const navigate = useNavigate();

  let email = useRef();
  let password = useRef();

  // signing in
  const signIn = async (e) => {
    e.preventDefault();
    await login(email.current.value, password.current.value)
      .then((auth) => {
        console.log(auth);
        // navigates to the homepage
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
    
  };

  const register = async (e) => {
    e.preventDefault();
    await signup(email.current.value, password.current.value)
      // if it successfully created a user with an email and password
      .then((auth) => {
      
        console.log(auth);
        // navigates to the homepage
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>

        <form>
          <h5>E-mail</h5>
          <input type="email" ref={email} />

          <h5>Password</h5>
          <input type="password" ref={password} />

          <button onClick={signIn} className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to MY Conditions of Use and Sale. Please see
          our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice
        </p>
        <button onClick={register} className="login__registerButton">
          Don't have an acount? Register
        </button>
      </div>
    </div>
  );
}

export default Login;

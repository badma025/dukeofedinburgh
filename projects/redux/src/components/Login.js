import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";
import { logout } from "../features/user";

function Login() {
  // this is used to modify state
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({
              name: "Alim",
              age: 13,
              email: "alim@gmail.com",
            })
          );
        }}>
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}>
        Logout
      </button>
    </div>
  );
}

export default Login;

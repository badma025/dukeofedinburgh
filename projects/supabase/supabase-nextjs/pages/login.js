import React, { useState } from "react";
import { supabase } from "../utils/supabaseClient";

function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    await supabase.auth.signIn({ email });
    console.log("done!");
  };

  const [email, setEmail] = useState("");

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label className="mr-8" htmlFor="email">
          Email
        </label>
        <input
          className="ring ring-red-500"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email);
          }}
        />
        <button
          className="ml-5 hover:text-white hover:bg-gray-900 p-3 rounded-full"
          type="submit"
          onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/authentication/Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./state/StateProvider";
import { auth } from "./firebase";
import Payment from "./components/Payment/Payment";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // onSnapshot for auth
    const unsub = onAuthStateChanged(auth, (authUser) => {
      console.log("Current user is >>> " + authUser?.email);
      console.log(authUser);

      if (authUser) {
        //  the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          // setting our user to our firebase authenticated user
          user: authUser,
        });
      } else {
        //  the user is logged out
        dispatch({
          type: "SET_USER",
          // setting our user to our firebase authenticated user
          user: null,
        });
      }
    });
    return unsub;
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />

          <Route
            path="/payment"
            element={
              <>
              <Header/>
                <Payment />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

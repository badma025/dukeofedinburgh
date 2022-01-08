import React from "react";
import Profile from "./components/Profile";
import Login from "./components/Login";

import "./App.css";
import ChangeColour from "./components/ChangeColour";

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColour/>
    </div>
  );
}

export default App;

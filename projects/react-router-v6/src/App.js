import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import E404 from "./pages/404";

function App() {
  return (
    <Router>
      {/* nav is shown by default in every page because we import App.js from the index.js (so if we are on the about component it renders the about component and everything in the app (the links)) */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      {/* the routes we have */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* :username is a parameter which can be stored using useParams (e.g /profile/alim) */}
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </Router>
  );
}

export default App;

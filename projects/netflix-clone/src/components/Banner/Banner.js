import React, { useState, useEffect } from "react";
import axios from "../../axios/axios";
import requests from "../../axios/requests";
import "./Banner.css"

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // gets the netflix originals
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        // gets a random index of the length of the object (e.g request.data.results[5] could be randomly picked)
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

// truncates a string based on its length
  function truncate (str, n) {
    return str?. length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    // image
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        {/* description */}
          <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
        </div>
      </div>
      <div className="banner--fadeBottom"/>
    </header>
  );
}

export default Banner;

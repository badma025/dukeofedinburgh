import React, { useEffect, useState } from "react";
import axios from "../../axios/axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow }) {
  const base_url = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //   requests the movies
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // "https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US"
      // request is an object
      setMovies(request.data.results);
      console.log(movies);
      return request;
    }
    fetchData();
  }, [fetchUrl, movies]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    // closes the trailer if you have already clicked it
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // movieTrailer finds a trailer based on the name of the movie and it gives us back a string (we set that as variable URl)
      movieTrailer(movie?.name || "")
        .then((url) => {
          // url gives us something like this https://www.youtube.com/watch?v=PGwUdoeYHGc, but we want the ID
          // urlParams gets everything after the ?. and URLSearchParams gets the ID of the video
          // urlParams.get returns the first value associated to the given search parameter.
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* several row_poster(s) */}
        {movies.map((movie) => {
          return (
            <img
              onClick={handleClick(movie)}
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              // applies different styling depending on isLargeRow
              // you get this in return: https://image.tmdb.org/t/p/original/yxIdKGEjagaLs5kMjw92kAHmopH.jpg
              alt={movie.name}
            />
          );
        })}
      </div>
      {/* youtube embed */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;

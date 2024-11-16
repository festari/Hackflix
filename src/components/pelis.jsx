import React from "react";
import "./Pelis.css";

const Pelis = ({ movies, rating }) => {
  return (
    <div className="container grilla">
      {movies.map((movie) => (
        <div key={movie.id} className="tarjeta">
          <div className="movie-card">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/500x750?text=No+Image"
              }
              alt={movie.title}
            />
            <div className="movie-title">
              <h2>{movie.title}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pelis;

import React from "react";
import { Link } from "react-router-dom";
import "./MovieGrid.css";

const MovieGrid = ({ movies }) => (
  <div className="container grilla background">
    {movies.map((movie) => (
      <div key={movie.id} className="tarjeta">
        <div className="movie-card">
          <Link to={`/Movies/${movie.id}`}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/500x750?text=No+Image"
              }
              alt={movie.title}
            />
          </Link>
          <div className="movie-title">
            <h3>{movie.title}</h3>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default MovieGrid;

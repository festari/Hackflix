import React from "react";
import "./Pelis.css";

<<<<<<< HEAD
const Pelis = ({ movies }) => (
  <div className="container grilla background">
    {movies.map((movie) => (
      <div key={movie.id} className="tarjeta">
        <div className="movie-card">
          <Link to={`/Movies/${movie.id}`}>
=======
const Pelis = ({ movies, rating }) => {
  return (
    <div className="container grilla background">
      {movies.map((movie) => (
        <div key={movie.id} className="tarjeta">
          <div className="movie-card">
>>>>>>> 6dce416b1af9136c0770f8ec9ee643d483e3bba8
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
            <h2>{movie.title}</h2>
          </div>
        </div>
      </div>
    ))}
  </div>
);


export default Pelis;

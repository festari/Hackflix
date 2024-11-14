import React from "react";

const Pelis = ({ movies, rating }) => {
  return (
    <div className="container grilla">
      {movies.map((movie) => (
        <div key={movie.id} className="tarjeta">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Pelis;

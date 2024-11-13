import React from "react";
import data from "../data.json";

const Pelis = () => {
  
  return (
    <div className="container  grilla">
      {data.map((movie) => (
        <div key={movie.id} className="tarjeta">
          <img src={movie.poster_path} alt={movie.title} />
          <h2>{movie.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Pelis;

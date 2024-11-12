import React from "react";
import data from "../data.json";
import "./Pelis.css";

const Pelis = () => {
  return (
    <div className="grilla">
      {data.map((movie) => (
        <div key={movie.id} className="tarjeta">
          <img src={movie.poster_path} alt={movie.title} />
          <h2>{movie.title}</h2>
        </div>
      ))}
    </div>
  );
}; //lo hizo nacho//

export default Pelis;

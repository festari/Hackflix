import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import "./MovieGrid.css";
import datosdingles from "./Selection.json";

const OurSelection = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(datosdingles);
  }, []);

  return (
    <div>
      <NavigationBar />
      <div>
        <h2 className="titleOurSelection">Our selection of movies</h2>
      </div>
      <div className="container grilla background">
        {movies.map((movie) => (
          <div key={movie.id} className="tarjeta">
            <div className="movie-card">
              <Link to={`/OurSelection/${movie.id}`}>
                <img
                  src={
                    movie.poster_path
                      ? movie.poster_path
                      : "https://via.placeholder.com/500x750?text=No+Image"
                  }
                  alt={movie.name}
                />
              </Link>
              <div className="movie-title">
                <h2>{movie.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSelection;

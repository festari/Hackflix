import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import "./MovieGrid.css";
import datosdingles from "./Selection.json";
import Banner from "../Banner";

export const quicksort = (movies) => {
  if (movies.length <= 1) return movies;
  const pivot = movies[0].name.toLowerCase();
  const smaller = movies.filter((movie) => movie.name.toLowerCase() < pivot);
  const greater = movies.filter((movie) => movie.name.toLowerCase() > pivot);
  const equal = movies.filter((movie) => movie.name.toLowerCase() === pivot);
  return [...quicksort(smaller), ...equal, ...quicksort(greater)];
};

const OurSelection = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const sortedMovies = quicksort(datosdingles);
    setMovies(sortedMovies);
  }, []);

  return (
    <div>
      <NavigationBar />
      <Banner />
      <div>
        <h2 className="titleOurSelection">⟼ Nuestra selección</h2>
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
                <h3>{movie.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSelection;

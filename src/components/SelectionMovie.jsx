import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import datosdingles from "./Selection.json";
import "./MovieDetails.css";

const SelectionMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = datosdingles.find(
      (movie) => movie.id === parseInt(id)
    );
    setMovie(selectedMovie);
  }, [id]);

  if (!movie) {
    return <div>Película no encontrada</div>;
  }

  return (
    <div className="movie-details">
      <NavigationBar />
      <div className="container">
        <div className="Poster">
          <h1 className="Titulo">{movie.name}</h1>
          <img
            className="Poster-img"
            src={
              movie.poster_path
                ? movie.poster_path
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={movie.name}
          />
        </div>
        <div className="place">
          <div className="informacion">
            <p className="movie-summary">
              Resumen: {movie.plot || "No disponible"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionMovie;

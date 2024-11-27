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
      <div className="container back-select">
        <div className="poster-selec">
          <h2 className="titulo-select">{movie.name}</h2>
          <img
            className="poster-img-selc"
            src={
              movie.poster_path
                ? movie.poster_path
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={movie.name}
          />
        </div>
        <div className="place">
          <div className="info-selec">
            <p className="movie-summary-selec">
              {movie.plot || "No disponible"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionMovie;

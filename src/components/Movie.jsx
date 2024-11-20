import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Imagen from "./header";
import "./Movie.css";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=c86d2f312ee79124783dcee4dc3d5cc0`
        );
        const data = await response.json();
        setMovie(data);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>No se encontró la película.</div>;
  }

  return (
    <div className="movie-details">
      <Imagen />
      <div className="container">
        <div className="Poster">
          <h1 className="Titulo">{movie.title}</h1>
          <img
            className="Poster-img"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={movie.title}
          />
        </div>
        <div className="place">
          <div className="informacion">
            <h5 className="movie-release-date">
              Fecha de lanzamiento: {movie.release_date || "N/A"}
            </h5>
            <h5 className="movie-summary">
              Resumen: {movie.overview || "No disponible"}
            </h5>
            <h5 className="movie-rating">
              Calificación: {movie.vote_average || "N/A"}/10
            </h5>
            <h5 className="movie-duration">
              Duración: {movie.runtime || "N/A"} minutos
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;

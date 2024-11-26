import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import "./MovieDetails.css";

function MovieDetails() {
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
    return <div>Loading....</div>;
  }

  const rating = movie.vote_average
    ? parseFloat(movie.vote_average.toFixed(1))
    : "N/A";

  return (
    <div className="movie-details">
      <NavigationBar />
      <div className="container back">
        <div className="Poster">
          <h2 className="Titulo">{movie.title}</h2>
          <div className="poster-img">
            <img
              className="poster-img"
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/500x750?text=No+Image"
              }
              alt={movie.title}
            />
          </div>
        </div>
        <div className="place">
          <div className="informacion">
            <p className="movie-release-date">
              Fecha de lanzamiento: {movie.release_date || "N/A"}
            </p>
            <p className="movie-summary">
              Resumen: {movie.overview || "No disponible"}
            </p>
            <p className="movie-rating">Calificación: {rating}/10</p>
            <p className="movie-duration">
              Duración: {movie.runtime || "N/A"} minutos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

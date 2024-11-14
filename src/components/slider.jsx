import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Slider.css";

function Slider({ movies }) {
  return (
    <div id="carouselExample" className="carousel slide custom-carousel">
      <div  className="conatinerMovies">
        <div className="carousel-inner">
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="carousel-content carouselCss">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="d-block carousel-image"
                  alt={movie.title}
                />
                <div className="information">
                  <div className="carousel-text">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;

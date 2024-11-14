import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";  // Asegúrate de que Bootstrap CSS esté importado
import "bootstrap/dist/js/bootstrap.bundle.min.js";  // Asegúrate de que Bootstrap JS esté importado
import "./Slider.css";

function Slider() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://i.blogs.es/79a59a/terrifier-3-hero-theatrical-sm-1/450_1000.jpeg"
            className="d-block w-100"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://media.traveler.es/photos/64bf8d5b81fcfac4992f9755/16:9/w_2560%2Cc_limit/Barbie_rev-1-BAR-TT3-0059_High_Res_JPEG.jpeg"
            className="d-block w-100"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://m.media-amazon.com/images/S/pv-target-images/e02281e750a40dfb99a7bb3f16936f2dc7f73f96c98e666bbf1d9284a3d922b1._SX1080_FMjpg_.jpg"
            className="d-block w-100"
            alt="Slide 3"
          />
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
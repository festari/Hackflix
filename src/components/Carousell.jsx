import React from "react";

const Carousel = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://wallpaperaccess.com/full/8642963.gif"
            className="d-block w-100"
            alt="1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://media.giphy.com/media/YfnALOssX8C1W/giphy.gif"
            className="d-block w-100"
            alt="2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/originals/73/90/14/739014c380b8edda503d43d11de48581.gif"
            className="d-block w-100"
            alt="3"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
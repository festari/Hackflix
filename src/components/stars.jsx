import React from "react";
import ReactStars from "react-rating-stars-component";

const Stars = ({ rating, setRating }) => {
  const ratingChanged = (newRating) => {
    setRating(newRating * 2);
  };

  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      activeColor="#ffd700"
      value={rating / 2}
      isHalf={true}
    />
  );
};

export default Stars;

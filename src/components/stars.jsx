import React from "react";
import { Rating } from "react-simple-star-rating";
import Pelis from "./pelis";

function Stars() {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };

  return (
    <div className="App">
      <Rating onClick={handleRating} />
      <Pelis movies={movies} rating={rating} />{" "}
    </div>
  );
}

export default Stars;

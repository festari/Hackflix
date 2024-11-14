import ReactStars from "react-rating-stars-component";

function Stars({ rating, setRating }) {
  const ratingChanged = (newRating) => {
    setRating(newRating); // borradme
  };
  return (
    <>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
      ,
    </>
  );
}

export default Stars;

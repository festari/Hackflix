import ReactStars from "react-rating-stars-component";
import "./Stars.css";

function Stars({ setRating }) {
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  return (
    <>
      <div className="Estrellas">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={50}
          activeColor="#f242f5"
          classNames="size-stars"
        />
      </div>
      ,
    </>
  );
}

export default Stars;

import ReactStars from "react-rating-stars-component";
import "./Stars.css";

function Stars({ setRating }) {
  const ratingChanged = (newRating) => {
    setRating((newRating - 1) * 2);
  };

  return (
    <div className="Estrellas">
      <h2>Filtrar por Rating:&nbsp; &nbsp;</h2>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={50}
        activeColor="#f242f5"
        classNames="size-stars"
      />
      <h2>&nbsp; &nbsp;& Más.</h2>
    </div>
  );
}

export default Stars;

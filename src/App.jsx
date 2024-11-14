import { useEffect, useState } from "react";
import "./App.css";
import Imagen from "./components/header";
import Pelis from "./components/Pelis";
import Stars from "./components/stars";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=c86d2f312ee79124783dcee4dc3d5cc0&include_adult=false&page=2&sort_by=popularity.desc&vote_count.gte=40"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const filteredMovies = movies.filter((movie) => movie.vote_average >= rating);

  return (
    <>
      <Imagen />
      <Stars rating={rating} setRating={setRating} />
      <Pelis movies={filteredMovies} />
    </>
  );
}

export default App;

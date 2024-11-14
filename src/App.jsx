import { useEffect, useState } from "react";
import "./App.css";
import Imagen from "./components/header";
import Pelis from "./components/Pelis";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=c86d2f312ee79124783dcee4dc3d5cc0&include_adult=false&page=1&sort_by=popularity.desc&vote_count.gte=40"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <Imagen />
      <Pelis movies={movies} />
    </>
  );
}

export default App;

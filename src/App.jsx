import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Imagen from "./components/header";
import data from "./data.json";
import Pelis from "./components/pelis";

function App() {
  const [movies, setMovies] = useState([]); // Estado para guardar los datos de las películas

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=c86d2f312ee79124783dcee4dc3d5cc0&include_adult=false&page=1&sort_by=popularity.desc&vote_count.gte=40"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("Error al obtener las películas:", error);
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

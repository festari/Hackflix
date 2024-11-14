import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";
import Imagen from "./components/header";
import Pelis from "./components/Pelis";
import Stars from "./components/stars";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(0);
  const [page, setPage] = useState(2); // Inicializa la página en 2

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=c86d2f312ee79124783dcee4dc3d5cc0&include_adult=false&page=1&sort_by=popularity.desc&vote_count.gte=40`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const filteredMovies = movies.filter((movie) => movie.vote_average >= rating);
  const fetchData = () => {
    setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=c86d2f312ee79124783dcee4dc3d5cc0&include_adult=false&page=${page}&sort_by=popularity.desc&vote_count.gte=40`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies((prevMovies) => [...prevMovies, ...data.results]);
          setPage((prevPage) => prevPage + 1);
        });
    }, 2620);
  };

  return (
    <>
      <Imagen />
      <Stars rating={rating} setRating={setRating} />
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchData}
        hasMore={true}
        loader={<h4 style={{ textAlign: "center" }}>Cargando...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Has visto todo</b>
          </p>
        }
      >
        <Pelis movies={movies} />
      </InfiniteScroll>
    </>
  );
}

export default App;

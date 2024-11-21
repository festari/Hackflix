import InfiniteScroll from "react-infinite-scroll-component";
import NavigationBar from "./NavigationBar";
import MovieGrid from "./MovieGrid";
import Banner from "./Banner";

import { useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(0);
  const [page, setPage] = useState(3);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=c86d2f312ee79124783dcee4dc3d5cc0&include_adult=false&page=2&sort_by=popularity.desc&vote_count.gte=40"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

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
    }, 2500);
  };

  return (
    <>
      <NavigationBar />
      <Banner />
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spimmerPlace">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        <MovieGrid movies={movies} />
      </InfiniteScroll>
    </>
  );
}

export default Home;

import InfiniteScroll from "react-infinite-scroll-component";
import NavigationBar from "../NavigationBar";
import MovieGrid from "../pages/MovieGrid";
import Stars from "../Stars";
import Banner from "../Banner";
import { useEffect, useState } from "react";
import "./Home.css";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "c86d2f312ee79124783dcee4dc3d5cc0";

function Home() {
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMovies([]);
    setPage(1);
    setHasMore(true);
    fetchMovies(1, true);
  }, [searchQuery]);

  const fetchMovies = (currentPage, reset = false) => {
    const endpoint = searchQuery
      ? `${API_BASE_URL}/search/movie`
      : `${API_BASE_URL}/discover/movie`;

    fetch(
      `${endpoint}?api_key=${API_KEY}&include_adult=false&sort_by=popularity.desc&vote_count.gte=40&page=${currentPage}&query=${searchQuery}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          setMovies((prevMovies) =>
            reset ? data.results : [...prevMovies, ...data.results]
          );
        }
      });
  };

  const fetchData = () => {
    if (hasMore) {
      const nextPage = page + 1;
      fetchMovies(nextPage);
      setPage(nextPage);
    }
  };

  const filteredMovies = movies.filter((movie) => movie.vote_average >= rating);

  return (
    <>
      <NavigationBar setSearchQuery={setSearchQuery} />
      <Banner />
      <Stars setRating={setRating} />
      <InfiniteScroll
        dataLength={filteredMovies.length}
        next={fetchData}
        hasMore={hasMore}
      >
        <MovieGrid movies={filteredMovies} />
      </InfiniteScroll>
    </>
  );
}

export default Home;

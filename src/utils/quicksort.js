export const quicksort = (movies) => {
  if (movies.length <= 1) return movies;
  const pivot = movies[0].title.toLowerCase();
  const smaller = movies.filter((movie) => movie.title.toLowerCase() < pivot);
  const greater = movies.filter((movie) => movie.title.toLowerCase() > pivot);
  const equal = movies.filter((movie) => movie.title.toLowerCase() === pivot);
  return [...quicksort(smaller), ...equal, ...quicksort(greater)];
};

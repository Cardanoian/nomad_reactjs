import { useState, useEffect } from "react";

import Movie from "../components/Movie";

const movie_url =
  "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await (await fetch(movie_url)).json();
    setMovies(response.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div className="App">
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            genres={movie.genres}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            summary={movie.summary}
            title={movie.title}
            year={movie.year}
          />
        ))
      )}
    </div>
  );
}

export default Home;

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    return json.data.movie;
  };
  useEffect(() => {
    const movieDataProcess = async () => {
      setMovie(await getMovie());
      setLoading(false);
    };
    movieDataProcess();
  }, []);
  console.log(loading);
  return (
    <div>
      {loading ? (
        <h1>loading....</h1>
      ) : (
        <div>
          <h1>
            <Link to="/">Go Home</Link>
          </h1>
          <img src={movie.large_cover_image} alt={movie.title} />
          <h1>
            {movie.title} {`(${movie.year})`}
          </h1>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
          <h4>{movie.description_full}</h4>
        </div>
      )}
    </div>
  );
}

export default Detail;

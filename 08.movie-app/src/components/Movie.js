import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, genres, id, summary, title, year }) {
  return (
    <div key={id}>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>
          {title} ({year})
        </Link>
      </h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default Movie;

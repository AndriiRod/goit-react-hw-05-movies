import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import MovieItem from 'components/MovieItem/';

const MovieList = ({ data }) => {
  const location = useLocation();
  if (data.length === 0) {
    return <div>No matches found</div>;
  }

  return (
    <ul>
      {data.map(({ title, id }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <MovieItem title={title} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieList;

MovieList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};

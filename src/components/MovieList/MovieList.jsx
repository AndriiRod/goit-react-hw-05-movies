import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MovieItem from 'components/MovieItem/';

const MovieList = ({ data }) => {
  return (
    <ul>
      {data.map(({ title, id }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>
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

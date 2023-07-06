import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Loader from 'components/Loader/';

const placehold = 'https://placehold.co/400x600?text=Not+Found';

const MovieInfo = ({ data }) => {
  const { original_title, vote_average, overview, genres, poster_path } = data;

  return (
    <>
      <img
        width="400px"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : placehold
        }
        alt={original_title}
      />
      <p>User Score:{vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genires</h2>
      <p>{genres.map(genre => genre.name).join(', ')}</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieInfo;

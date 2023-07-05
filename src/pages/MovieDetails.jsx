import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import MovieInfo from 'components/MovieInfo/';
import ErrorMessage from 'components/ErrorMessage/';
import Loader from 'components/Loader/';

import api from 'api/api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const [status, setStatus] = useState(Status.IDLE);
  const [errorMessage, setErrorMessage] = useState();
  const { movieId } = useParams();
  const location = useLocation();

  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setStatus(Status.PENDING);
    try {
      const getRequest = async () => {
        const response = await api.GetDetailsOfMovie(movieId);
        setMovie(response);
        setStatus(Status.RESOLVED);
      };
      getRequest();
    } catch (error) {
      setErrorMessage(error.message);
      setStatus(Status.REJECTED);
    }
  }, [movieId]);

  return (
    <section>
      <Link to={backLink.current}>Go Back</Link>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <ErrorMessage message={errorMessage} />}
      {status === Status.RESOLVED && <MovieInfo data={movie} />}
    </section>
  );
};

export default MovieDetails;

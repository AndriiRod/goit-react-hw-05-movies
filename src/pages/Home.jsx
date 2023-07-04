import api from 'api/api';
import MovieList from 'components/MovieList/';
import Loader from 'components/Loader/';
import ErrorMessage from 'components/ErrorMessage/';
import { useEffect, useState } from 'react';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setStatus(Status.PENDING);
    const getRequest = async () => {
      try {
        const response = await api.GetTrendingMovies();
        setMovies(response.results);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setErrorMessage(error.message);
        setStatus(Status.REJECTED);
      }
    };
    getRequest();
  }, []);

  return (
    <section>
      <h1>Home</h1>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <ErrorMessage message={errorMessage} />}
      {status === Status.RESOLVED && <MovieList data={movies} />}
    </section>
  );
};

export default Home;

import { toast } from 'react-toastify';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import SearchBar from 'components/SearchBar/';
import Loader from 'components/Loader/';
import ErrorMessage from 'components/ErrorMessage/';
import MovieList from 'components/MovieList/';

import api from 'api/api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState();
  const [errorMessage, setErrorMessage] = useState(null);
  const [movies, setMovies] = useState([]);
  const searchQuery = searchParams.get('query');

  const setNewSearchQuery = query => {
    if (query === '') {
      toast.info('Request cannot be empty');
      return;
    }
    setSearchParams({ query: query });
  };

  useEffect(() => {
    if (!searchQuery) return;
    setStatus(Status.PENDING);
    const getRequest = async () => {
      try {
        const response = await api.GetMoviesByTitles(searchQuery);
        setMovies(response.results);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setErrorMessage(error.message);
        setStatus(Status.REJECTED);
      }
    };
    getRequest();
  }, [searchQuery]);

  return (
    <section>
      <SearchBar setNewSearchQuery={setNewSearchQuery} />
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <ErrorMessage message={errorMessage} />}
      {status === Status.RESOLVED && <MovieList data={movies} />}
    </section>
  );
};

export default Movies;

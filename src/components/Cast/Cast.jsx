import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import api from 'api/api';
import Loader from 'components/Loader/';
import ErrorMessage from 'components/ErrorMessage/';
import CastList from 'components/CastList/';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Cast = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const [cast, setCast] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getRequest = async () => {
      setStatus(Status.PENDING);
      try {
        const response = await api.GetMovieCast(movieId);
        setCast(response.cast);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setErrorMessage(error.message);
        setStatus(Status.REJECTED);
      }
    };
    getRequest();
  }, [movieId]);

  return (
    <div>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <ErrorMessage message={errorMessage} />}
      {status === Status.RESOLVED && <CastList data={cast} />}
    </div>
  );
};

export default Cast;

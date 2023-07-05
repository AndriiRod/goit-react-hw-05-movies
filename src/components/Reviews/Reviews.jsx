import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'api/api';
import Loader from 'components/Loader/';
import ErrorMessage from 'components/ErrorMessage/';

import ReviewsList from 'components/ReviewsList/';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
const Reviews = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const [reviews, setReviews] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const getRequest = async () => {
      setStatus(Status.PENDING);
      try {
        const response = await api.GetMovieReviews(movieId);
        setReviews(response.results);
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
      {status === Status.RESOLVED && <ReviewsList data={reviews} />}
    </div>
  );
};

export default Reviews;

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '60cc6ad85da178dfca0e63709f5042e0';

const GetTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day', {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return response.data;
};

const GetDetailsOfMovie = async id => {
  const response = await axios.get(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return response.data;
};

const GetMoviesByTitles = async name => {
  const response = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query: name,
      include_adult: 'true',
    },
  });
  return response.data;
};
const GetMovieCast = async id => {
  const response = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return response.data;
};

const GetMovieReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return response.data;
};

const api = {
  GetTrendingMovies,
  GetDetailsOfMovie,
  GetMoviesByTitles,
  GetMovieCast,
  GetMovieReviews,
};

export default api;

const MovieInfo = ({ data }) => {
  const { original_title, vote_average, overview, genres, poster_path } = data;

  return (
    <>
      <img
        width="400px"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
      />
      <p>User Score:{vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genires</h2>
      <p>{genres.map(genre => genre.name).join(', ')}</p>
    </>
  );
};

export default MovieInfo;

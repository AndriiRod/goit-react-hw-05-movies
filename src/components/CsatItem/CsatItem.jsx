import PropTypes from 'prop-types';

const CastItem = ({ data }) => {
  const { profile_path, name, character } = data;

  return (
    <div>
      <img
        width="200px"
        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
        alt={name}
      ></img>
      <p>Name:{name}</p>
      <p>Character{character}</p>
    </div>
  );
};

export default CastItem;

CastItem.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};

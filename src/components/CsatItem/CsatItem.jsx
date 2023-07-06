import PropTypes from 'prop-types';

const placehold = 'https://placehold.co/200x300?text=Not+Found';

const CastItem = ({ data }) => {
  const { profile_path, name, character } = data;

  return (
    <div>
      <img
        width="200px"
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : placehold
        }
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

import PropTypes from 'prop-types';

const ReviewsItem = ({ data }) => {
  const { author, content } = data;
  return (
    <div>
      <h2>{author}</h2>
      <p>{content}</p>
    </div>
  );
};
export default ReviewsItem;

ReviewsItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};

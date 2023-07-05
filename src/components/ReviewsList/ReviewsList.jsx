import PropTypes from 'prop-types';
import ReviewsItem from 'components/ReviewsItem/';

const ReviewsList = ({ data }) => {
  if (data.length === 0) {
    return <div>This film has no reviews</div>;
  }
  return (
    <ul>
      {data.map(({ id, ...otherData }) => {
        return (
          <li key={id}>
            <ReviewsItem data={otherData} />
          </li>
        );
      })}
    </ul>
  );
};
export default ReviewsList;

ReviewsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};

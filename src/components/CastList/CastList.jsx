import PropTypes from 'prop-types';
import CastItem from 'components/CsatItem/';

const CastList = ({ data }) => {
  if (data.length === 0) {
    return <div>No information available</div>;
  }
  return (
    <ul>
      {data.map(({ id, ...otherData }) => {
        return (
          <li key={id}>
            <CastItem data={otherData} />
          </li>
        );
      })}
      ;
    </ul>
  );
};

export default CastList;

CastList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};

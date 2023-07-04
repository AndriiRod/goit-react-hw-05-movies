import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
  return <div>{message}</div>;
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

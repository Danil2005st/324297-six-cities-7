import PropTypes from 'prop-types';

export default PropTypes.shape({
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
}).isRequired;

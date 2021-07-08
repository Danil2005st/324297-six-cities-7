import React from 'react';
import Review from '../review/review';
import ReviewsForm from '../reviews-form/reviews-form';
import reviewProp from '../review/review.prop';
import PropTypes from 'prop-types';

function ReviewsList(props) {
  const {reviews} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <Review key={review.id} reviewItem={review} />)}
      </ul>
      <ReviewsForm />
    </section>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default ReviewsList;

import React from 'react';
import {Redirect} from 'react-router-dom';
import offerProp from '../offer/offer.prop';
import PropTypes from "prop-types";
import ReviewsList from '../rewiews-list/rewiews-list';
import OfferMap from "../offer-map/offer-map";

const SingleOffer = (props) => {
  const {reviews, offers, offerId} = props;
  const currentOffer = offers.find(offer => offer.id.toString() === offerId);
  const locations = offers.filter((offer) => offer.location !== currentOffer.location).map((offer) => offer.location);

  console.log(currentOffer, 'currentOffer')
  console.log(locations, 'locations');
  const percentage = `${currentOffer.rating * 20}%`;

  if(!currentOffer) {
    return <Redirect to="/404" />
  }

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {currentOffer.images.map((image) => {
            return (
              <div key={image} className="property__image-wrapper">
                <img className="property__image" src={image} alt="Screen studio"/>
              </div>
            )
          })}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {currentOffer.isPremium ? <div className="property__mark"><span>Premium</span></div> : null }

          <div className="property__name-wrapper">
            <h1 className="property__name">
              {currentOffer.title}
            </h1>
            <button className="property__bookmark-button button" type="button">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width : percentage}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{currentOffer.rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {currentOffer.type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {currentOffer.bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              Max {currentOffer.maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{currentOffer.price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {currentOffer.goods.map((good) => {
                return (
                  <li key={good} className="property__inside-item">{good}</li>
                )
              })}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img
                  className="property__avatar user__avatar"
                  src={currentOffer.host.avatarUrl}
                  width="74"
                  height="74"
                  alt="Host avatar"
                />
              </div>
              <span className="property__user-name">{currentOffer.host.name}</span>
              {currentOffer.host.isPro ?  <span className="property__user-status">Pro</span> : null }
            </div>
            <div className="property__description">
              <p className="property__text">
                {currentOffer.description}
              </p>
            </div>
          </div>
          <ReviewsList
            reviews={reviews}
          />
        </div>
      </div>
      <OfferMap
        offer={currentOffer}
        locations={locations.slice(0, 3)}
      />
    </section>
  );
};

SingleOffer.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  offerId: PropTypes.string.isRequired,
};


export default SingleOffer;

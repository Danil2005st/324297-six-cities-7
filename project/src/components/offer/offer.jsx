import React, {useState} from 'react';
import offerProp from './offer.prop';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function Offer(props) {
  const {offerItem} = props;
  const {rating, price, title, type, images, isPremium, isFavorite, id} = offerItem;
  const [activeOffer, setActiveOffer] = useState(id);
  const percentage = `${rating * 20}%`;
  const isFavoriteClass = isFavorite ? 'place-card__bookmark-button button place-card__bookmark-button--active' : 'place-card__bookmark-button button';

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => {
        setActiveOffer(activeOffer);
      }}
    >
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null }

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.OFFER}/:${id}`}>
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place screen"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={isFavoriteClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width : percentage}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.OFFER}/:${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

Offer.propTypes = {
  offerItem: offerProp,
};


export default Offer;

import React from 'react';
import {Link} from 'react-router-dom';
import offerProp from '../offer/offer.prop';
import {AppRoute} from '../../const';

function FavoriteList(props) {
  const {offerItem} = props;
  const {rating, price, title, type, images, id} = offerItem;
  const percentage = `${rating * 20}%`;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={`${AppRoute.OFFER}/:${id}`}>
            <span>{offerItem.city.name}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <article className="favorites__card place-card">
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <Link to={AppRoute.OFFER}>
              <img
                className="place-card__image"
                src={images[0]}
                width="150"
                height="110"
                alt="Place"
              />
            </Link>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">In bookmarks</span>
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
      </div>
    </li>
  );
}

FavoriteList.propTypes = {
  offerItem: offerProp,
};


export default FavoriteList;

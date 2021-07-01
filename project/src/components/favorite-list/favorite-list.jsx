import React from 'react';
import {Link} from 'react-router-dom';
import offerProp from '../offer/offer.prop';
import {AppRoute} from '../../const';
import FavoriteListItem from '../favorite-list-item/favorite-list-item';

function FavoriteList(props) {
  const {cityOffers} = props;

  console.log(cityOffers, 'cityOffers')
 //const {rating, price, title, type, images, id} = offerItem;
 // const percentage = `${rating * 20}%`;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={`${AppRoute.ROOT}`}>
            <span>{cityOffers.city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {cityOffers.offers.map((offer) => (
          <FavoriteListItem key={offer.id} offer={offer} />
        ))}
      </div>
    </li>
  );
}

FavoriteList.propTypes = {
  cityOffers: offerProp,
};


export default FavoriteList;

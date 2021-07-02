import React from 'react';
import Header from '../header/header';
import {Link} from 'react-router-dom';
import offerProp from '../offer/offer.prop';
import PropTypes from 'prop-types';
import FavoriteList from '../favorite-list/favorite-list';

function FavoritesScreen(props) {
  const {offers} = props;

  const splitOffers = (offers) => {
    const cities = {};

    offers.forEach((offer) => {
      if (cities[offer.city.name]) {
        cities[offer.city.name].offers.push(offer);
      } else {
        cities[offer.city.name] = {
          city: offer.city.name,
          offers: [offer]
        };
      }
    });
    return Array.from(Object.values(cities));
  }

  const splitOffersList = splitOffers(offers);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              {splitOffersList.map((cityOffersList) => (
              <FavoriteList key={cityOffersList.city} cityOffers={cityOffersList} />
              ))}

            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}


FavoritesScreen.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default FavoritesScreen;

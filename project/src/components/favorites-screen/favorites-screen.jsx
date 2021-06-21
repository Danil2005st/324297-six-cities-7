import React from 'react';
import Header from '../header/header';
import {Link} from 'react-router-dom';
import offerProp from '../offer/offer.prop';
import PropTypes from 'prop-types';
import FavoriteList from '../favorite-list/favorite-list';

function FavoritesScreen(props) {
  const {offers} = props;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {offers.filter((offer) => offer.isFavorite).map((filteredOffer) => (
                <FavoriteList key={filteredOffer.id} offerItem={filteredOffer} />
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

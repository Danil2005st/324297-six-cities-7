import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import {Link} from 'react-router-dom';
import reviewProp from '../review/review.prop';
import offerProp from '../offer/offer.prop';
import OfferList from '../offer-list/offer-list';
import CitiesMap from '../cities-map/cities-map';
import ListLocations from '../locations-list/locations-list';

function removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
}

function MainScreen(props) {
  const {reviews, offers} = props;
  const cities = offers.map(function (offer) {return (offer.city)});
  const uniqueCities = removeDuplicates(cities, 'name');
  const [selectedCity, setSelectedCity] = useState({});
  const onListItemHover = (listItemName) => {
    const currentCity = uniqueCities.find((city) =>
      city.name === listItemName
    );
    setSelectedCity(currentCity);
  };

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <ListLocations
            uniqueCities={uniqueCities}
            onListItemHover={onListItemHover}
          />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{reviews.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>

              <OfferList offers={offers} />

            </section>
            <div className="cities__right-section">
              <CitiesMap
                uniqueCities={uniqueCities}
                selectedCity={selectedCity}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

MainScreen.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default MainScreen;

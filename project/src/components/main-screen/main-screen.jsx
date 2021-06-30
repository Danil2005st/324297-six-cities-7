import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import reviewProp from '../review/review.prop';
import offerProp from '../offer/offer.prop';
import OfferList from '../offer-list/offer-list';
import CitiesMap from '../cities-map/cities-map';
import ListLocations from '../locations-list/locations-list';

function MainScreen(props) {
  const {reviews, offers, mainCities} = props;
  const cities = offers.map((offer) => offer.city);
  const locations = offers.map((offer) => offer.location);
  const [selectedCity, setSelectedCity] = useState(mainCities[3]);
  const onListItemClick = (listItemName) => {
    const currentCity = mainCities.find((city) =>
      city === listItemName
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
            uniqueCities={mainCities}
            onListItemClick={onListItemClick}
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
                cities={cities}
                locations={locations}
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
  mainCities: PropTypes.array.isRequired,
};

export default MainScreen;

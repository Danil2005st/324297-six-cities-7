import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import reviewProp from '../review/review.prop';
import offerProp from '../offer/offer.prop';

function App(props) {
  const {reviews, offers, cities} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen
            reviews={reviews}
            offers={offers}
            mainCities={cities}
          />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesScreen
            offers={offers}
          />
        </Route>
        <Route path={AppRoute.OFFER}>
          <OfferScreen
            reviews={reviews}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
  offers: PropTypes.arrayOf(offerProp).isRequired,
  cities: PropTypes.array.isRequired,
};

export default App;

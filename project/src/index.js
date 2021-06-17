import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import reviews from './mocks/reviews';
import offers from './mocks/offers';

ReactDOM.render(
  <React.StrictMode>
    <App
      reviews={reviews}
      offers={offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));

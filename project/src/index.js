import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {reviews} from './mocks/reviews.js';
import {offers} from './mocks/offers.js';

ReactDOM.render(
  <React.StrictMode>
    <App
      cards={reviews}
      offers={offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));

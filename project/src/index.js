import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CARDS: [1, 2, 3, 4, 5, 6],
};

ReactDOM.render(
  <React.StrictMode>
    <App
      cards={Setting.CARDS}
    />
  </React.StrictMode>,
  document.getElementById('root'));

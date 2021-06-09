import React from 'react';
import MainScreen from '../main-screen/main-screen';
import PropTypes from 'prop-types';

function App(props) {
  const {cards} = props;

  return (
    <MainScreen
      cards={cards}
    />
  );
}

App.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default App;

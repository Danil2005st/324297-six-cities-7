import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

function ListLocations(props) {
  const {uniqueCities, onListItemClick} = props;
  const listItemClickHandler = (evt) => {
    onListItemClick(evt.target.innerText);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">{
        uniqueCities.map((location) => {
          return (
            <li
              className="locations__item"
              key={location}
              onClick={listItemClickHandler}
            >
              <Link className="locations__item-link tabs__item" to="/">
                <span>{location}</span>
              </Link>
            </li>
          );
        })
      }</ul>
    </section>
  );
};

ListLocations.propTypes = {
  uniqueCities: PropTypes.array.isRequired,
};

export default ListLocations;

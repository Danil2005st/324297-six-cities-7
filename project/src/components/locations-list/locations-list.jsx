import React from 'react';
import {Link} from 'react-router-dom';

function ListLocations(props) {
  const {uniqueCities, onListItemHover} = props;
  const listItemHoverHandler = (evt) => {
    onListItemHover(evt.target.innerText);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">{
        uniqueCities.map((location) => {
          return (
            <li
              className="locations__item"
              key={location.name}
              onMouseEnter={listItemHoverHandler}
            >
              <Link className="locations__item-link tabs__item" to="/">
                <span>{location.name}</span>
              </Link>
            </li>
          );
        })
      }</ul>
    </section>
  );
};

export default ListLocations;

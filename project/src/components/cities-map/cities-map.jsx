import React, {useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';

function CitiesMap(props) {
  const {offers} = props;
  const mapRef = useRef(null);
  const cities = offers.map(function (offer, index, array) {return (offer.city)});
  const map = useMap(mapRef, cities[0]);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  return (
    <section
      className="cities__map map"
      cities={cities}
      ref={mapRef}
    />
  );
}

CitiesMap.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default CitiesMap;

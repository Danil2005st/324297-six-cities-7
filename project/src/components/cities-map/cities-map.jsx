import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';

function CitiesMap(props) {
  const {uniqueCities, selectedCity} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, uniqueCities[0]);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  useEffect(() => {
    if (map) {
      uniqueCities.forEach((city) => {
        leaflet
        .marker({
          lat: city.location.latitude,
          lng: city.location.longitude
        }, {
          icon: (city.name === selectedCity.name)
            ? currentCustomIcon
            : defaultCustomIcon
        })
        .addTo(map);
      });
    }
  }, [map, uniqueCities, selectedCity]);

  return (
    <section
      className="cities__map map"
      cities={uniqueCities}
      ref={mapRef}
    />
  );
}

CitiesMap.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default CitiesMap;

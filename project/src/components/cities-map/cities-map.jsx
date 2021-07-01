import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import PropTypes from 'prop-types';

function CitiesMap(props) {
  const {cities, locations, selectedCity} = props;
  const mapRef = useRef(null);
  const currentCity = cities.filter((city) => city.name === selectedCity);
  const map = useMap(mapRef, currentCity[0].location);

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
      locations.forEach((location) => {
        leaflet
        .marker({
          lat: location.latitude,
          lng: location.longitude
        }, {
          icon: defaultCustomIcon
        })
        .addTo(map);
      });
    }
  }, [map, locations, selectedCity]);

  return (
    <section
      className="cities__map map"
      location={location}
      ref={mapRef}
    />
  );
}

CitiesMap.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  })).isRequired,
};

export default CitiesMap;

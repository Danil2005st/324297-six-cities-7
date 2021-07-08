import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import PropTypes from 'prop-types';

function OfferMap(props) {
  const {locations, offer} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, offer.location);

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
  }, [map, locations, offer]);

  return (
    <section
      className="property__map map"
      location={location}
      ref={mapRef}
    />
  );
}

OfferMap.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  })).isRequired,
};

export default OfferMap;

import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 30.704649,
  lng: 76.717873
};

function MyMapComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCWobYWLKF8T-dG43jpsrXe5KIMsEwP6Rc">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        <MarkerF position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMapComponent;

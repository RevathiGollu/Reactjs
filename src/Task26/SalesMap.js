
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function SalesMap() {
  return (
    <div>
      <h2>Sales Distribution Map</h2>
      <MapContainer center={[37.7749, -122.4194]} zoom={10} className="leaflet-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[37.7749, -122.4194]}>
          <Popup>San Francisco: $500k Sales</Popup>
        </Marker>
        <Marker position={[34.0522, -118.2437]}>
          <Popup>Los Angeles: $700k Sales</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default SalesMap;

import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const objectIcon = L.divIcon({
  html: '<div class="circle one"></div><div class="circle two"></div><div class="circle three"></div>',
  iconSize: [32, 32],
  className: 'my-icon',
});

const googleHybrid = L.tileLayer('http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

function Map() {
  const position = [30.057698584217924, 31.35537700118351];

  return (
    <div className="Map-container">
      <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }} attributionControl={false} zoomControl={false}>
        <TileLayer
          url={googleHybrid._url}
          maxZoom={googleHybrid.options.maxZoom}
          subdomains={googleHybrid.options.subdomains}
        />
        <Marker position={position} icon={objectIcon} />
      </MapContainer>
    </div>
  );
};

export default Map;
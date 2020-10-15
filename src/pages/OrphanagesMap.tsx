import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';

import faviconImg from '../images/favicon.svg';

const mapIcon = Leaflet.icon({
  iconUrl: faviconImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={faviconImg} alt="Logo Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Brasília</strong>
          <span>Distrito Federal</span>
        </footer>
      </aside>

      <Map 
        center={[-15.6498619, -47.7954426]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

        <Marker
          icon={mapIcon} 
          position={[-15.649975, -47.784297]}
        >
          <Popup 
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar das crianças
            <Link to="/details/1">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/create" className="create-orphanage">
        <FiPlus size="32" color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;

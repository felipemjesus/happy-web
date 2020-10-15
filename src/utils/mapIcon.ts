import Leaflet from 'leaflet';

import faviconImg from '../images/favicon.svg';

const mapIcon = Leaflet.icon({
  iconUrl: faviconImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

export default mapIcon;

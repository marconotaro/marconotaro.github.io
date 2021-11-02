// Javascript to create an interactive map using Leaflet, MapBox and OpenStreetMap and clustering the markers with markercluster

// full screen control: https://github.com/brunob/leaflet.fullscreen
var map = L.map('map',{
  zoomControl: true,
  zoomControlOptions: {position: 'topright'},
  fullscreenControl: true,
  fullscreenControlOptions: {position: 'topright'}
}).setView([14, 14], 2);

/*
  workaround for 1px lines appearing in some browsers due to fractional transforms and resulting anti-aliasing.
  link: https://github.com/Leaflet/Leaflet/issues/3575
*/
(function(){
  var originalInitTile = L.GridLayer.prototype._initTile
  L.GridLayer.include({
    _initTile: function (tile) {
      originalInitTile.call(this, tile);
      var tileSize = this.getTileSize();
      tile.style.width = tileSize.x + 1 + 'px';
      tile.style.height = tileSize.y + 1 + 'px';
    }
  });
})()

/*
  set map tiles source
  Migrating to the modern Static Tiles API
  - https://docs.mapbox.com/help/troubleshooting/migrate-legacy-static-tiles-api/
  - https://docs.mapbox.com/api/maps/#styles
*/
mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
boxLink = '<a href="https://www.mapbox.com/">Mapbox</a>';
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}@2x?access_token={accessToken}',{
  attribution: '&copy; ' + mapLink + ' Contributors,' + ' Imagery ' + boxLink,
  maxZoom: 20,
  id: 'streets-v11',
  accessToken: 'pk.eyJ1IjoibW41MTUiLCJhIjoiY2pteDVwNGZtMnF2eTNrcG4xcWp6M2FoeSJ9.IHSYNXCOHQJTSy0eGVEtZw'
}).addTo(map);

// Leaflet Control Geocoder with box
L.Control.geocoder().addTo(map);

/*
  custom icon
  options doc: https://leafletjs.com/reference-1.3.4.html#icon
  markers link: https://github.com/pointhi/leaflet-color-markers
*/
var CustomIcon = L.icon({
  iconUrl: 'img/marker-icon-violet.png',
  iconRetinaUrl: "img/marker-icon-2x-violet.png",
  iconSize: [15,25], // resize original icon of 60%
  iconAnchor: [7,24],
  popupAnchor: [1,-15]
});

// clusterize marker on the map
var markerClusters = L.markerClusterGroup();
for(var i=0; i<spots.length; i++){     // see json.city.js for spots
  var popup = spots[i].spot;
  var marker = L.marker([spots[i].lat, spots[i].lon], {icon: CustomIcon}).bindPopup(popup);
  markerClusters.addLayer(marker);
}
map.addLayer(markerClusters);

/* add a single marker for each city
for (var i = 0; i < spots.length; i++) {
  marker = new L.marker([spots[i].lat, spots[i].lon], {icon: CustomIcon}).bindPopup(spots[i][0]).addTo(map);
}
*/

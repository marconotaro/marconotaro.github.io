// script to create an Interactive Map by using Leaflet and OpenStreetMap and clustering the markers with markercluster

// full screen control: https://github.com/brunob/leaflet.fullscreen
var map = L.map('map',{
zoomControl: true,
zoomControlOptions: {position: 'topright'},
fullscreenControl: true,
fullscreenControlOptions: {position: 'topright'}
}).setView([14, 14], 2);

// set map tiles source
mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
boxLink = '<a href="https://www.mapbox.com/">Mapbox</a>';			
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',{
	attribution: '&copy; ' + mapLink + ' Contributors,' + ' Imagery ' + boxLink,
	maxZoom: 20,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoibW41MTUiLCJhIjoiY2pteDVwNGZtMnF2eTNrcG4xcWp6M2FoeSJ9.IHSYNXCOHQJTSy0eGVEtZw'
}).addTo(map); 

// custom icon
// options doc: https://leafletjs.com/reference-1.3.4.html#icon
// markers link: https://github.com/pointhi/leaflet-color-markers
var CustomIcon = L.icon({
	iconUrl: 'img/marker-icon-violet.png', 
	iconRetinaUrl: "img/marker-icon-2x-violet.png", 
	iconSize: [15,25], // resize original icon of 60%
	iconAnchor: [7,24],
	popupAnchor: [1,-15]
});

// add a single marker for each city 
// for (var i = 0; i < places.length; i++) {
// 	marker = new L.marker([places[i].lat, places[i].lon], {icon: CustomIcon})
// 	.bindPopup(places[i][0])
// 	.addTo(map);
// }

// clusterize marker on the map
var markerClusters = L.markerClusterGroup();
for(var i=0; i<places.length; i++){			
	var popup = places[i].city;
	var marker = L.marker([places[i].lat, places[i].lon], {icon: CustomIcon}).bindPopup(popup);
	markerClusters.addLayer(marker);
}
map.addLayer(markerClusters);

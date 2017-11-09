var map = L.map('map', {zoomControl: false}).setView([-37.8136, 144.9631], 14);
	
// Default: http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png	
// B&W: http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png
// Watercolour:
mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
wholink = '<a href="http://stamen.com">Stamen Design</a>';
L.tileLayer(
	'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
		attribution: '&copy; '+mapLink+' Contributors & '+wholink,
		minZoom: 11,
		maxZoom: 16,
	}).addTo(map);

var heat = L.heatLayer(
	coords, {
		radius: 15,
		minOpacity: 0.5
	}).addTo(map);

const map = L.map('myMap')
.setView ({
    lat: 59.92749,
    lng: 30.31127,
}, 10);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
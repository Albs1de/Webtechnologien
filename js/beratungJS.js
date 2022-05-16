"use strict";

function myMaps() {

    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    mymap.
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHJpdG9uMTk5NSIsImEiOiJja2tjanRha2wwa2g0MnVvYWo2YnB0OW9hIn0.PsxbJJFfeZ_679aCH8NAlw', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZHJpdG9uMTk5NSIsImEiOiJja2tjanRha2wwa2g0MnVvYWo2YnB0OW9hIn0.PsxbJJFfeZ_679aCH8NAlw'
    }).addTo(mymap);
    mymap.invalidateSize()
}


// colored markers
var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  var goldIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  var orangeIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  var violetIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

// Create the map and center it on KG
var mymap = L.map('mapid',{
    center:[-36.798234, 174.721137], 
    zoom: 14,
    minZoom:14,
    maxZoom:18});

// Load in different base maps    
var baseL = {
    'Satellite' : L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/satellite-v9',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiaGFsNiIsImEiOiJja2Fld2t4bG0wandzMnpwbmp2a24xemdqIn0.OhKsfnxo_9tOpw30fWU-CQ'
            }),
    'Terrain' : L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/outdoors-v9',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiaGFsNiIsImEiOiJja2Fld2t4bG0wandzMnpwbmp2a24xemdqIn0.OhKsfnxo_9tOpw30fWU-CQ'
            }),
    'Light' : L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/light-v9',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiaGFsNiIsImEiOiJja2Fld2t4bG0wandzMnpwbmp2a24xemdqIn0.OhKsfnxo_9tOpw30fWU-CQ'
            }),
    'Dark' : L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/dark-v9',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiaGFsNiIsImEiOiJja2Fld2t4bG0wandzMnpwbmp2a24xemdqIn0.OhKsfnxo_9tOpw30fWU-CQ'
            }),
    'Streets' : L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v9',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiaGFsNiIsImEiOiJja2Fld2t4bG0wandzMnpwbmp2a24xemdqIn0.OhKsfnxo_9tOpw30fWU-CQ'
            })
        }

//load the geoJSONs into javascript variables and set their icons
var gin = L.geoJSON(ginger, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng,{icon:goldIcon});
        // return L.circleMarker(latlng, gingerOptions);
    },});
var asp = L.geoJSON(asparagus, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng,{icon:greenIcon});
        // return L.circleMarker(latlng, gingerOptions);
    },});
var wns = L.geoJSON(woolly_nightshade, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng,{icon:violetIcon});
        // return L.circleMarker(latlng, asparagusOptions);
    },});
var jas = L.geoJSON(jasmine, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng,{icon:redIcon});
        // return L.circleMarker(latlng, asparagusOptions);
    },})
var mp = L.geoJSON(moth_plant, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng,{icon:orangeIcon});
        // return L.circleMarker(latlng, asparagusOptions);
    },})
// create a control layer
L.control.layers(baseL,
    {
    "Mothplant":mp,
    "Asparagus": asp,
    "Ginger": gin,
    "Woolly Nightshade": wns,
    "Jasmine": jas
    },   
    {collapsed:false}
    ).addTo(mymap);

baseL["Satellite"].addTo(mymap); 


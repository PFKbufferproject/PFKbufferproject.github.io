<!DOCTYPE html>
<html>
<head>
  <title>Leaflet Plant Abundance</title>
  <meta charset="UTF-8"/>
  <link rel="stylesheet" type="text/css" href="leafletMapStyle.css">
  <!-- Leaflet link -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
  integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
  crossorigin=""/>
  <!-- PruneCluster for leaflet-->
  <link rel="stylesheet" href="MarkerCluster.css"/>
  <script src="leaflet.markercluster.js"></script>
  <script src="leaflet-heat.js"></script>
</head>
<body>
  <div id="mapid"></div> 

</body>

<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
  integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
  crossorigin=""></script>
<script src="sitesVisited1.js"></script>
<script src="geoJSONs/ginger.js"></script>
<script src="KG-akl_council_parcels.geojson"></script>
<script>

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
    center:[-36.806540, 174.723754], 
    zoom: 16,
    minZoom:14,
    maxZoom:18});


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
  
var mothplantOptions = {
    radius: 10,
    fillColor: "#ff7800",
    color: "#ffffff",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.4
};
let mpicon = L.icon({
    iconUrl: 'images/mothplant-icon.png', //note if you add a slash before images it doesn't recognise the file directory
    // shadowUrl: 'leaf-shadow.png',
    iconSize:     [36, 42], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
let gingericon = L.icon({
    // iconUrl: '/images/yellow-ginger-icon.png',
    iconUrl: 'images/yellow-ginger-icon-waterpixels.png',
    // shadowUrl: 'leaf-shadow.png',
    iconSize:     [36*1.2, 42*1.2], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
var mp = L.geoJSON(mothplant, {
    pointToLayer: function (feature, latlng) {
        // return L.circleMarker(latlng, mothplantOptions);
        return L.marker(latlng, {icon: mpicon})
    },})
var asparagusOptions = {
    radius: 10,
    fillColor: "#0A70CF",
    color: "#ffffff",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.4
};
var asp = L.geoJSON(asparagus, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng,{icon:greenIcon});
        // return L.circleMarker(latlng, asparagusOptions);
    },})
var gingerOptions = {
    radius: 10,
    // fillColor: "#ffffff",



    color: "#ffffff",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.4,
    function(feature) {
        switch (feature.properties.abundance) {
            case "": return {fillColor: "#ffffff"};
            case "+": return {fillColor: "#123456"};
            case "++":   return {fillColor: "#445566"};
            case "+++":   return {fillColor: "#876764"};
        }}};

var gin1 = L.geoJSON(ginger1, {
    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng,{icon:gingericon});
        return L.circleMarker(latlng, gingerOptions);
    },})

var gin = L.geoJSON(ginger, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng,{icon:gingericon});
        // return L.circleMarker(latlng, gingerOptions);
    },})
var nightshadeOptions = {
    radius: 10,
    fillColor: "#FFDB00",
    color: "#ffffff",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.4
};
var ns = L.geoJSON(nightshade, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng,{icon:violetIcon});
        // return L.circleMarker(latlng, nightshadeOptions);
    },})
var mad = L.geoJSON(madeira, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng,{icon:goldIcon});
    },})
var rh = L.geoJSON(rhamnus, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng,{icon:redIcon});
    },})
// var markers = L.markerClusterGroup();
    // markers.addLayer();
    // mymap.addLayer(markers);
// var akllayer = L.geoJSON(akl,{}).addTo(mymap);

// addressPoints = mpheatvar.map(function (p) { return [p[0], p[1]]; });
// var heat = L.heatLayer(mpheatvar,{max:3}).addTo(mymap)

L.control.layers(baseL,
      {"Mothplant":mp,
      "Asparagus": asp,
      "Ginger": gin,
      "Ginger1": gin1,
      "Woolly Nightshade": ns,
      "Madeira Vine": mad,    
      "Rhamnus": rh},
      {collapsed:false}
      ).addTo(mymap);

baseL["Satellite"].addTo(mymap);



  </script>
</html>
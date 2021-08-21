console.log("map.js is loaded");

// ----------------------------------------------------------------- //
// Create map object
var myMap = L.map("map", {
  center: [38.5, -96],
  zoom: 4
});

// Add tile layer
var map = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/light-v10",
  accessToken: API_KEY
}).addTo(myMap);

// ----------------------------------------------------------------- //
// Links to get the geojson.
var link = "static/js/map.geojson";


// ----------------------------------------------------------------- //
// Function to grab GeoJSON data.
d3.json(link).then(function(data) {
  // Create a geoJSON layer with the retrieved data
  L.geoJson(data, {
    // Style each feature (in this case a state)
    style: function (feature) {
      return {
        color: "white",
        // Call the chooseColor function to decide which color to color the state
        fillColor: "#2d5e88",
        fillOpacity: 0.5,
        weight: 1.5
      };
    },

    // Call on each feature
    onEachFeature: function (feature, layer) {
      // Set mouse events to change map styling
      layer.on({
        // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
        mouseover: function (event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.9
          });
        },
        // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
        mouseout: function (event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.5
          });
        },
        // When a feature (state) is clicked, it is enlarged to fit the screen
        // click: (e) => areaClickEvent(e, data, "link"),
        click: function(event) {
          myMap.fitBounds(event.target.getBounds());
        }
      });

      // Give each feature a pop-up with information pertinent to it
      layer.bindPopup("<h2>" + feature.properties.NAME  + "</h2>" + "<p>" + "HDD: " + feature.properties.HDD + "<br>" + "CDD: " + feature.properties.CDD + "</p>" + "<p>" + "Go to data and visualizations &rArr; " + feature.properties.Link + "</p>");
    }
    
  }).addTo(myMap);
});


// ----------------------------------------------------------------- //
// Base map and Function to add layer control

// Create basemap object
var baseMaps = {
  "Map": map
};



let config = {

  apiKey: "AIzaSyAmRLP2Bvl5wJ3865wrIMmlhFQfjV8hHn0",
  authDomain: "t-th-2018-e7c2e.firebaseapp.com",
  databaseURL: "https://t-th-2018-e7c2e.firebaseio.com",
  projectId: "t-th-2018-e7c2e",
  storageBucket: "t-th-2018-e7c2e.appspot.com",
  messagingSenderId: "56220760164"

};
firebase.initializeApp(config);

let database = firebase.database()

let newBand = {
  name: "name",
  venue: "venue",
  time: "time",
  dateAdded: firebase.database.ServerValue.TIMESTAMP

};
//console.log(newBand);
// Code for push to database
database.ref("/user").push(newBand);


// MAP WITH SEARCH BOX
function initAutocomplete() {
  let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 30.2672, lng: -97.7431},
    zoom: 12,
    mapTypeId: 'roadmap',
    styles: [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#d59563' }]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#d59563' }]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{ color: '#263c3f' }]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#6b9a76' }]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{ color: '#38414e' }]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#212a37' }]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#9ca5b3' }]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{ color: '#746855' }]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#1f2835' }]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#f3d19c' }]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{ color: '#2f3948' }]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#d59563' }]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#17263c' }]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#515c6d' }]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{ color: '#17263c' }]
            }
          ]
  });

  // Create the search box and link it to the UI element.
  let input = document.getElementById('pac-input');
  let searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  let markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    let places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    let bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      //icon to change
      let icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}



// BANDS IN TOWN API 

let apiKey = "FLXsLL3QQ77sw3ob";
let searchLatLng = "30.2672,-97.7431";
let response = [];

function eventSearch(locationSearch){
  let queryUrl = "https://api.songkick.com/api/3.0/events.json?apikey=" + apiKey + "&location=geo:" +  searchLatLng;

  var foo = {};

  $.ajax({
    url: queryUrl,
    method: "Get"
  }).done(function(response) {
    foo.locations = response; 
    for( let i = 0; i < response.length;  i++ ){
      let event = response[i];     
    }

    function eqfeed_callback(response) {
      map.data.addGeoJson(response);
    }

    $("#eventSearchButton").on("click", function() {
      alert("clicked");
    });

    // data lives in response 
    //console.log(response);
    
    //write to dom 
  })
};

eventSearch();
console.log(resultsPage.results.event[0].displayName);









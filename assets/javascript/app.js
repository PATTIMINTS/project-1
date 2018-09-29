// BEING FUNCTION //

let config = {

  apiKey: "AIzaSyAmRLP2Bvl5wJ3865wrIMmlhFQfjV8hHn0",
  authDomain: "t-th-2018-e7c2e.firebaseapp.com",
  databaseURL: "https://t-th-2018-e7c2e.firebaseio.com",
  projectId: "t-th-2018-e7c2e",
  storageBucket: "t-th-2018-e7c2e.appspot.com",
  messagingSenderId: "56220760164"

};

  // INITIALIZE FIREBASE //
firebase.initializeApp(config);

let database = firebase.database()



let date = "10/1";
let name = "Lydia Lunch";
let venue = "Beerland";
let time = "8 PM";

let newBand = {
  date: date,
  name: name,
  venue: venue,
  time: time,
  dateAdded: firebase.database.ServerValue.TIMESTAMP

};

// CONSOLE.LOG( newBand) ;
// CODE FOR PUSH DATABASE

// database.ref("/user").push(newBand);


database.ref("/user").on("child_added", function (childSnapshot, prevChildKey) {

  let dateof = childSnapshot.val().date;
  let bandName = childSnapshot.val().name;
  let venues = childSnapshot.val().venue;
  let timeof = childSnapshot.val().time;


  console.log(dateof);
  console.log(venues);
  console.log(bandName);
  console.log(timeof);

  
  //  This works also
  // $("#date-display").append("<tr><td>" + dateof + "</td>");
  // $("#band-display").append("<tr><td>" + bandName + "</td>");
  // $("#venue-display").append("<tr><td>" + venues + "</td>");
  // $("#time-display").append("<tr><td>" + timeof + "</td>");

  $("#gigTable > tbody").append("<tr><td> " + dateof + "</td><td>" + bandName+ "</td><td>" + venues + "</td><td>" + timeof + "</td></tr>");
  
}, function (errorObject) {
  console.log("Errors handled: " + errorObject.code);

})
function initMap() {
  
  // Map options 
  let options = {
    zoom: 11,
    center: { lat: 30.2672, lng: -97.7431 },
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
  }
  // New Map
  let map = new google.maps.Map(document.getElementById('map'), options);

  let venuelatlng = [
    [ "Sugar Baby Watermelon", 30.246765, -97.73162100000002, 1],
    [ "Stubbs", 30.2685, -97.7363, 2],
    [ "Spiderhouse Ballroom", 30.2955, -97.7418, 3],
    [ "The Electric Church", 30.2517, -97.6993, 4],
    [ " The Nutty Brown", 30.2086, -97.9725, 5],
    [ "Nomad's Bar", 30.3126, -97.7049, 6]
  ];

  // let map = new google.maps.Map (document.getElementById('map'), {
    //zoom: 12, 
    //center: new google.maps.LatLng (30.2672, -97.7431 ),
    //mapTypeId: google.maps.MapTypeId.ROADMAP
  //});

   //let infowindow = new google.maps.InfoWindow () //

    for (i = 0; i < venuelatlng.length; i++) {
      marker= new google.maps.Marker({
        position: new google.maps.LatLng(venuelatlng [i][1], venuelatlng [i][2]),
        map: map
      });

    

    }

  // Add marker function 
  function addMarker(coords) {
    let marker = new google.maps.Marker({
      position: venuelatlng,
      map: map
    });
  }

  addMarker();



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



}

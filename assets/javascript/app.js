var config = {
  
  apiKey: "AIzaSyAmRLP2Bvl5wJ3865wrIMmlhFQfjV8hHn0",
  authDomain: "t-th-2018-e7c2e.firebaseapp.com",
  databaseURL: "https://t-th-2018-e7c2e.firebaseio.com",
  projectId: "t-th-2018-e7c2e",
  storageBucket: "t-th-2018-e7c2e.appspot.com",
  messagingSenderId: "56220760164"

};
firebase.initializeApp(config);

var database = firebase.database()

var newTrain = {
name: "name",
destination: "destination",
firstTrainTime: "firstTrainTime",
dateAdded:firebase.database.ServerValue.TIMESTAMP
 
};
console.log (newTrain);
// Code for push to database
database.ref().push(newTrain);

function initMap(){
    // Map options 
    let options = {
        zoom: 12,
        center: {lat:30.2672, lng:-97.7431},
        styles: [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#6b9a76'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}]
    }
  ]
    }
    // New Map
    let map = new google.maps.Map(document.getElementById('map'),options);
    
    /*
    // Add marker
    let marker =  new google.maps.Marker({
        position: {lat:30.246765, lng:-97.73162100000002},
        map:map 
    });
    
    // Info window
    let infoWindow = new google.maps.InfoWindow({
        content: "<h6>Where Lance lives</h6>"
    });
    
    // Listener for click 
    marker.addListener("click", function(){
        infoWindow.open(map, marker);
    }); 
    */

    // Add marker function 
    function addMarker(coords){
        let marker =  new google.maps.Marker({
        position: {lat:30.246765, lng:-97.73162100000002},
        map:map 
    });
    }



}
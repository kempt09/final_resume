                // navbar//


var HTMLheaderName = '<h1 id="name" class="myNav">%data%</h1>' + " ";
var HTMLheaderRole = '<h4 class="myNav">%data%</h4>';



                // Contact //



var HTMLfacebook = '<li class="col-xs-12 col-sm-3 social">facebook | %data%</li>';
var HTMLemail = '<li class="col-xs-12 col-sm-3">e | %data%</li>';
var HTMLlinkedin = '<li class="col-xs-12 col-sm-3">linkedin | %data%</li>';
var HTMLgithub = '<li class="col-xs-12 col-sm-3">github | %data% </li>';



                // Bio section //


var HTMLbioPic = '<img src="%data%" id="biopic" class="col-xs-12 col-sm-5">';
var HTMLwelcomeMsg = '<h2 id="welcome" class="text-center col-xs-12 col-sm-7">Welcome!</h2> <span class="welcome-message col-xs-12 col-sm-7 text-left">%data%</span>';
var HTMLskillsStart = '<h2 id="skills-h3" class="col-xs-12 col-sm-12 text-center">Skills at a Glance</h2><ul id="skills" class="list-unstyled"></ul>';
var HTMLskills = '<li class="text-center col-sm-3"><span class="white-text">%data%</span></li>';


                // Work History //


var HTMLworkStart = '<div class="work-entry col-sm-6"></div>';
var HTMLworkEmployer = '<h4>%data%';
var HTMLworkTitle = ' - %data%<h4>';
var HTMLworkDates = '<div class="date-text"><br>%data%</div>';
var HTMLworkLocation = '<div class="date-text">%data%</div>';
var HTMLworkDescription = '<p class="workDescription text-justify"><br>%data%</p>';


                // Projects //

var HTMLprojectStart = '<div class="project-entry col-sm-6 text-center"></div>';
var HTMLprojectTitle = '<h4 class="ptitle"><a href="#">%data%</a></h4>';
var HTMLprojectDates = '<h5 class="date">%data%</h5><hr class="bottom-line">';
var HTMLprojectDescription = '<p class="text-justify">%data%</p>';
var HTMLprojectImage = '<img src="%data%">';


                // Education //

var HTMLschoolStart = '<div class="education-entry col-xs-12 col-sm-6 text-center"></div>';
var HTMLschoolName = '<h4>%data%';
var HTMLschoolDegree = ' -- %data%</h4>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em>Major: %data%</em>';

                // Map //

var googleMap = "<div id='map' class='col-xs-12'></div>";

                // Location Tracker //

clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  console.log(x, y);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /* 
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js. 
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);


    // iterates through school locations and appends each location to
    // the locations array
    for ( school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    // iterates through places locations and appends each location to
    for (i in places.locations){
      locations.push(places.locations[i].location)
    }

    return locations;
  }


  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
     //fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});

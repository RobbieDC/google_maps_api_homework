var initialize = function() {
  var mapContainer = document.querySelector("#map");
  var centre = { lat: 55.94716, lng: -3.20198 };
  var map = new Map(mapContainer, centre, 10);
  var codeClan = map.addMarker(centre);
  map.addClickEvent();

  var infoWindowText = "<p>Window info test</p>"
  var infoWindow = map.addInfoWindow( infoWindowText );
  map.addListenerForInfoWindow(infoWindow, codeClan);

  var button = createAndAddButton();
  var handleClick = function() {
    map.googleMap.setCenter( new google.maps.LatLng(57.477773, -4.224721) );
  }
  button.onclick = handleClick;
}

var createAndAddButton = function() {
  var button = document.createElement( "button" );
  button.classList.add( "moveTo" );
  button.innerText = "Take me to the land of rubber bumpers";
  var pButton = document.createElement( "p" );
  pButton.classList.add( "buttonDiv" );
  pButton.appendChild( button );
  var body = document.querySelector( "body" );
  body.appendChild( pButton );
  return button;
}

window.onload = initialize;

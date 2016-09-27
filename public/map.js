var Map = function(container, coords, zoom) {

  this.googleMap = new google.maps.Map(container, {
    center: coords, 
    zoom: zoom 
  });

  this.addMarker = function(coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    return marker;
  }

  this.addClickEvent = function() {
    google.maps.event.addListener( this.googleMap, "click", function( event ) {
      var position = { 
        lat: event.latLng.lat(), 
        lng: event.latLng.lng() 
      };
      this.addMarker(position);
    }.bind(this) );
  }

  this.addInfoWindow = function(contentString) {
    var infowindow = new google.maps.InfoWindow( {
      content: contentString
    });
    return infowindow;
  }

  this.addListenerForInfoWindow = function(infowindow, marker) {
    marker.addListener( "click", function() {
      infowindow.open(this, marker);
    });
  }

  // this.moveToLocation = function(map, latLng) {
  //   setCenter(latLng);
  // }

  // this.handleButtonClick = function(latLng) {
  //   this.setCenter(latLng);
  // }

}
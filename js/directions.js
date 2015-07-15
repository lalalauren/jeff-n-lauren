$(document).ready(function() {
  if (document.getElementById('venue-map') !== null) {
    var directionsDisplay;

    var directionsService = new google.maps.DirectionsService();
    var map;
    var venue = new google.maps.LatLng(39.1297055, -77.8808825);
    function initialize() {
      directionsDisplay = new google.maps.DirectionsRenderer();


      var mapOptions = {
        center: venue,
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      map = new google.maps.Map(document.getElementById('venue-map'), mapOptions);
      directionsDisplay.setMap(map);
      var marker = new google.maps.Marker({
        position: venue,
        map: map,
        title: 'Venue Location',
        icon: '../images/marker.png'
      });
    }

    function calcRoute(start) {
      //var start = new google.maps.LatLng(41.850033, -87.6500523);

      var request = {
        origin: start,
        destination: venue,
        travelMode: google.maps.TravelMode.DRIVING
      };
      directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        }
      });
    }



    google.maps.event.addDomListener(window, 'load', initialize);

    $(function() {
      $('a#baltimore').click(function() {
        calcRoute(new google.maps.LatLng(39.2847064, -76.6204859));
      });
      $('a#dc').click(function() {
        calcRoute(new google.maps.LatLng(38.8993488, -77.0145665));
      });
    });
  }
});
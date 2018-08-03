function initMap() {
  var map = document.querySelector('#map')
  var location = new google.maps.LatLng(48.427806, 34.985024)
  var mapInstance = new google.maps.Map(map, {
    zoom: 15,
    center: new google.maps.LatLng(48.43, 34.985024)
  })
  var mapMarker = new google.maps.Marker({
    position: location
  })
  var contentString = '<div id="map-label" class="text-center">'+
    '<h5 id="map-title">«Каркас и кровля»</h5>'+
    '<div id="map-text">'+
    '<p>ул. Строителей, 45А, Днепр, 49000</p>'+
    '<p>Работаем с 8-00 до 19-00</p>'+
    '</div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  /* mapMarker.addListener('click', function() { */
    infowindow.open(map, mapMarker);
  /* }); */
  mapMarker.setMap(mapInstance)
}
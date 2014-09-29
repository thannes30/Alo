function initialize() {
  var myLatlng = new google.maps.LatLng(40.869893,-74.039346);
  var mapOptions = {
    zoom: 12,
    center: myLatlng
  };

  var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

  var contentString = '<div id="content" class="infowindow">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h4 id="firstHeading" class="firstHeading">Alo Cinema One Installers</h4>'+
      '<div id="bodyContent">'+
      '<p>263 South River St.<br/>Hackensack, NJ 07601<br/>201-880-5238</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
  });

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Alo Cinema One Installers'
  });
  map.setCenter(new google.maps.LatLng(40.895, -74.037294));
  infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', initialize);

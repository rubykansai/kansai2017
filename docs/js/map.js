  function initMap() {
    var position = {lat: 34.683880, lng: 135.509206};
    var iconBase = '../images/';
    var pin = iconBase + 'ico_pin.png';

    map = new google.maps.Map(document.getElementById('js-map'), {
      zoom: 16,
      scrollwheel: false,
      styles: [
      {
        "stylers": [
        {
          "visibility": "on"
        }
        ]
      },
      {
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#f5f5f5"
        }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
        {
          "visibility": "off"
        }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#616161"
        }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
        {
          "color": "#f5f5f5"
        }
        ]
      },
      {
        "featureType": "administrative",
        "stylers": [
        {
          "visibility": "on"
        }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#bdbdbd"
        }
        ]
      },
      {
        "featureType": "administrative.province",
        "stylers": [
        {
          "visibility": "on"
        }
        ]
      },
      {
        "featureType": "landscape",
        "stylers": [
        {
          "visibility": "on"
        }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "stylers": [
        {
          "visibility": "on"
        }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
        {
          "visibility": "on"
        }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#eeeeee"
        }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#757575"
        }
        ]
      },
      {
        "featureType": "poi.attraction",
        "stylers": [
        {
          "visibility": "on"
        }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
        {
          "visibility": "on"
        }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#e5e5e5"
        }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#9e9e9e"
        }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#ffffff"
        }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#757575"
        }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#dadada"
        }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#616161"
        }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#9e9e9e"
        }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
        {
          "visibility": "on"
        }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#e5e5e5"
        }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#eeeeee"
        }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#c9c9c9"
        }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#9e9e9e"
        }
        ]
      }
      ],
      center: position,
      mapTypeId: 'roadmap'
    });

  var contentString = '<div id="content">'+
  '<p><strong>大阪産業創造館 4F イベントホール</strong><br>大阪府大阪市中央区本町1丁目4-5</p>'+
  '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });


  var marker = new google.maps.Marker({
    position: position,
    map: map,
    icon: pin
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });


}
var locations = [
	{lat: -31.563910, lng: 147.154312},
	{lat: -42.734358, lng: 147.439506},
	{lat: -42.734358, lng: 147.501315},
	{lat: -42.735258, lng: 147.438000},
	{lat: -43.999792, lng: 170.463352}
]

function initMap() {
	var styles = [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}];

	var lat = "25.118972";
	var lng = "121.470766";
	var zoom = 12;

	var options = {
		mapTypeControlOptions: {
			mapTypeIds: [ 'Styled']
		},
		center: new google.maps.LatLng(lat,lng),
		zoom: zoom,
		scrollwheel: true,
		panControl: false,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: true,
		overviewMapControl: false,
		mapTypeId: 'Styled'
	};

	map = new google.maps.Map(document.getElementById('map'), options);
	var styledMapType = new google.maps.StyledMapType(styles, { name:  '' });
	map.mapTypes.set('Styled', styledMapType);

	center = map.getCenter();
	google.maps.event.addDomListener(window, 'resize', function() {
		map.setCenter(center);
	});

    setMarkers(map,locations);
}

function setMarkers(map,locations){
	var marker, i

	for (i = 0; i < locations.length; i++){
		var lat = locations[i]['lat'];
		var long = locations[i]['lng'];

		latlngset = new google.maps.LatLng(lat, long);

		var marker = new google.maps.Marker({  
          map: map, position: latlngset  
        });

        map.setCenter(marker.getPosition());

        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
	        return function() {
	           
	        };
	    })(marker,content,infowindow)); 
	}
}

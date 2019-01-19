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

	/*var kmlLayer = new google.maps.KmlLayer({
      url: 'http://www.google.com/maps/d/kml?forcekml=1&mid=12a-8aZ3M0GNO6hMRJwTVa8GuYW8LI9ii',
      preserveViewport: true,
      map: map
    });*/

    var kmlLayer = new google.maps.KmlLayer({
      url: 'http://project.oniondesign.com.tw/ccc/scrollsofanortherncity/cta.kml?3',
      preserveViewport: true,
      map: map
    });
}


var app = angular.module('groupProject');

app.service('mapsService', function($window, $q, $http){
	var map;
	var places;
	var service;
	var infowindow;
	var location;

	// this.getPlaces = function() {
	// 	var dfd = $q.defer();

	// 	$http({
	// 		method: 'GET',
	// 		url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=cruise&key=AIzaSyBifmn_HLp_trPCxpvLwlrdbxmgUEJD_QY'
	// 	})
	// 	.then(function(response) {
	// 		console.log(response);
	// 		dfd.resolve(response.data);
	// 	})

	// 	return dfd.promise;
	// }

	this.init = function() {

	  $window.navigator.geolocation.getCurrentPosition(function(position) {
	  	location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	  	console.log(position.coords.latitude + " " + position.coords.longitude);


	  	map = new google.maps.Map(document.getElementById('map'), {
	      center: location,
	      zoom: 15
	    });

	    var request = {
	    	location: location,
	    	radius: '1000',
	    	types: ['food']
	    }

	    service = new google.maps.places.PlacesService(map);
	    service.nearbySearch(request, callback);

	  })

	}

	function callback(results, status) {
	  if (status == google.maps.places.PlacesServiceStatus.OK) {
	  	console.log(results);
	    for (var i = 0; i < results.length; i++) {
	      var place = results[i];
	      // createMarker(results[i]);
	    }
	  }
	}

})
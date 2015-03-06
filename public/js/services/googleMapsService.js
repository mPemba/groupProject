var app = angular.module('groupProject')

app.service('mapsService', function($window, $q, $http){
	var map;
	var places;
	var service;
	var infowindow;
	var location;
	var placeWithDetails;
	var newResults;

	this.init = function() {
		var dfd = $q.defer();
		

	  $window.navigator.geolocation.getCurrentPosition(function(position) {
	  	location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	  	console.log(position.coords.latitude + " " + position.coords.longitude);


	  	map = new google.maps.Map(document.getElementById('map'), {
	      center: location,
	      zoom: 15,
	      mapTypeId: google.maps.MapTypeId.SATELLITE,
	      disableDefaultUI: true
	    });

	    var request = {
	    	location: location,
	    	radius: '1000',
	    	types: ['food', 'restaurant']
	    }
	       var newId;


	    service = new google.maps.places.PlacesService(map);
	    service.nearbySearch(request, callback);
	    

	  })
	  function callback(results, status) {
		  if (status == google.maps.places.PlacesServiceStatus.OK) {
		  	newResults = results;


		    
		    
	  
		  	

		    if(results){
		    	dfd.resolve(results);
		    }
		    
		  }
		}

	  return dfd.promise;

	}
	this.getAllDetails = function(counter){
		newId = newResults[counter - 1].place_id;
		var deferred = $q.defer();

		service.getDetails( {
		  		placeId: newId
		  	}, function callbackDetails(place, status) {
   	        if (place) {
   	        	placeWithDetails = place;
   	        	deferred.resolve(placeWithDetails);
   	        	
   	        
   	    }
   	    
   });﻿
		return deferred.promise;
	}
})

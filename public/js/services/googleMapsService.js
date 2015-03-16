var app = angular.module('groupProject')

app.service('mapsService', function($window, $q, $http){
	var map;
	var places;
	var service;
	var infowindow;
	var location;
	var placeWithDetails;
	var newResults;
	var marker;

	this.changeMarkerPosition = function(arg) {
    map.setCenter(arg);
    marker.setPosition(arg);
}


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
	     marker = new google.maps.Marker({
		      position: location,
		      map: map,
		      title: 'Hello World!'
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
	// --------------  user input -------------------- 
    this.postBusiness = function (user, comment, businessName, businessLocation, rating){
    	var dfd = $q.defer();
    	$http({
    		method: 'POST', 
    		url: '/api/postBusiness',
    		data: {
    			userId: user,	
			 	comment: comment,
			 	businessName: businessName,
			 	businessLocation: businessLocation,
			 	rating: rating
    		}
    	}).success(function(response){
			console.log(response);	
            dfd.resolve(response);
        }).catch(function(err){
            dfd.reject(err);
        });
        return dfd.promise;
    };
 	this.getPriorUserInfo = function(businessName, businessLocation, comment, rating){
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: '/api/getBusiness' + "?businessName=" + businessName + "&businessLocation=" + businessLocation
		}).success(function(response){
			//console.log(111111111111, response);
            dfd.resolve(response);
        }).catch(function(err){
            	dfd.reject(err);
        		});
        	return dfd.promise;
    };

});

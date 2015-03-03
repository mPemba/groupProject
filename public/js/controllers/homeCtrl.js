
var app = angular.module('groupProject');

app.controller('homeCtrl', function($scope, mapsService) {
	$scope.test = "home page test test";

	// $scope.getPlaces = function() {
	// 	mapsService.getPlaces().then(function(res) {
	// 		console.log(res);
	// 	})
	// }


	mapsService.init();

})

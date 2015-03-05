
var app = angular.module('groupProject');

app.controller('homeCtrl', function($scope, mapsService) {

	$scope.modalShown = false;
    $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
	$scope.test = "home page test test";

	// $scope.getPlaces = function() {
	// 	mapsService.getPlaces().then(function(res) {
	// 		console.log(res);
	// 	})
	// }

	
	// mapsService.init();



	var newData = function(){
    	
		mapsService.init().then(function(res){
			

			$scope.newDataArr = res;
			
			var photo = res.photos;
			console.log(photo)
		    //$scope.newPhoto = res[0].photos[0].getUrl({'maxWidth': 500, 'maxHeight': 500});
		    console.log($scope.newPhoto)
			// if (photo) {
			// 	//$scope.newPhoto = photo.getUrl({'maxWidth': 500, 'maxHeight': 500}); 
			// }
			$scope.nextPlace()

		})

	}
	newData();
	var counter = 0;
	
	$scope.nextPlace = function(){
		console.log(counter)
		$scope.newObjVar = $scope.newDataArr[counter];
		counter = counter + 1;
		


	}

})

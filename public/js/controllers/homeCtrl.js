var app = angular.module('groupProject');
app.controller('homeCtrl', function($scope, $rootScope, mapsService) {
	$scope.modalShown = false;
    $scope.toggleModal = function() {
    	$scope.getAllMapDetails();
    $scope.modalShown = !$scope.modalShown;
    loadPriorUserInput();
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
			//console.log(photo)
		    //$scope.newPhoto = res[0].photos[0].getUrl({'maxWidth': 500, 'maxHeight': 500});
		    //console.log($scope.newPhoto)
			// if (photo) {
			// 	//$scope.newPhoto = photo.getUrl({'maxWidth': 500, 'maxHeight': 500}); 
			// }
			$scope.nextPlace()
		})
	}
	newData();
	var counter = 0;
	$scope.getAllMapDetails = function(){
		console.log(counter)
		mapsService.getAllDetails(counter).then(function(res){
			$scope.phoneNumber = res.formatted_phone_number;
			$scope.morePhotos = res.photos;			
		});		
	}
	$scope.nextPlace = function(){
		$scope.newObjVar = $scope.newDataArr[counter];
		counter = counter + 1;
	};

	// ------------ user input ------------------
$scope.clickAddInfo = function(){
 	//console.log($rootScope.user)
	mapsService.postBusiness(
		$rootScope.user,
		$scope.comment,
		$scope.newObjVar.name,
		$scope.newObjVar.vicinity,
		$scope.rating
	)
	$scope.comment = '';
	$scope.rating = {
        value: '1'
      };
};		
	var loadPriorUserInput = function(){
		mapsService.getPriorUserInfo(
			$scope.newObjVar.name,
			$scope.newObjVar.vicinity,
			$scope.priorComment,
			$scope.priorRating
		).then(function(res){
			//console.log(2222222222, res)
			$scope.comment = res.comment;
			$scope.rating = res.rating;
		})
	}
});
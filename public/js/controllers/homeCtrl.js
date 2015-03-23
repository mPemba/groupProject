var app = angular.module('groupProject');
app.controller('homeCtrl', function($scope, $rootScope, mapsService) {


	$scope.modalShown = false;
    $scope.toggleModal = function() {
    	newLocation($scope.newDataArr[counter - 1].geometry.location);
    	$scope.getAllMapDetails();
    $scope.modalShown = !$scope.modalShown;
    loadPriorUserInput();
  };
  var newLocation = function(arg){		
		mapsService.changeMarkerPosition(arg);		
	
	}
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
	$scope.goBack = function(){
		if(counter > 1){
		counter = counter - 1;
		$scope.newObjVar = $scope.newDataArr[counter - 1];
	}
	else{
		$scope.newObjVar = $scope.newDataArr[0]
	}
	}
	$scope.getAllMapDetails = function(){
		console.log(counter)
		mapsService.getAllDetails(counter).then(function(res){
			$scope.phoneNumber = res.formatted_phone_number;
			$scope.morePhotos = res.photos;
			var photosArr = res.photos;
            $scope.myInterval = 5000;
            console.log($scope.morePhotos);
            console.log($scope.morePhotos[0].getUrl({'maxWidth': 200, 'maxHeight': 200}))
            $scope.slides = $scope.morePhotos;
		  //   $scope.addSlide = function() {
		  //   var newWidth = 600 + slides.length + 1;
		  //   	 slides.push(
		  //     		$scope.morePhotos[0]
		  //   );
		  //   	 console.log($scope.slides);
		    	
		  // };
  // for (var i=0; i<4; i++) {
  //   $scope.addSlide();
  // }


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
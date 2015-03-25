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
		if(counter < $scope.newDataArr.length){
		$scope.newObjVar = $scope.newDataArr[counter];
		counter = counter + 1;
		newLocation($scope.newDataArr[counter - 1].geometry.location);
		}
	};

	// ------------ user input ------------------
$scope.clickAddInfo = function(newComment, rating){
	mapsService.postBusiness(
		$rootScope.user,
		newComment,
		$scope.newObjVar.name,
		$scope.newObjVar.vicinity,
		rating
	)
	$scope.comment = '';
	$scope.rating = {
        value: '1'
      };
};
  // -------------- show prior user comments and rating ----------------- 
	var loadPriorUserInput = function(){
		mapsService.getPriorUserInfo(
			$scope.newObjVar.name,
			$scope.newObjVar.vicinity
		).then(function(res){
			$scope._id = res._id;
			$scope.comment = res.comment;
			$scope.rating = res.rating;
		})
	}
// ---------------- update prior user comments and rating ------------------  	
$scope.updateUserInput = function(aComment, rating){
		mapsService.updateUserInfo(
			$scope._id,
			aComment,
			rating
			)
		// .then(function(res){
	// 		$scope.newComment = '';
	// 		comment = '';
	// 		aComment = '';
	// 		$scope.comment = '';
	// 		$scope.rating = '';
	//         loadPriorUserInput()
	}
});
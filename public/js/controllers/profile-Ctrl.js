angular.module('groupProject')
.controller('profileCtrl', function($scope, $rootScope, profileService){
 	$scope.clickUpDate = function(){
 	profileService.getBusiness()
 	.then(function(res){
		$scope.User = $rootScope.userId;
		$scope.userId = res.userId;
		$scope.comment = res.comment;
		$scope.businessName = res.businessName;
		$scope.businessLocation = res.businessLocation;
		$scope.rating = res.rating;
 		})
 	};
 	$scope.clickUpDate = function(){
 		profileService.getBusiness()
 		.then(function(res){
 			$scope.User = $rootScope.userId;
 			$scope.userId = res.userId;
 			$scope.comment = res.comment;
			$scope.businessName = res.businessName;
	 		$scope.businessLocation = res.businessLocation;
	 		$scope.rating = res.rating;
 		})
 	};
});
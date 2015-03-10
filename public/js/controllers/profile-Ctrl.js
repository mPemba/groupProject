angular.module('groupProject')
.controller('profileCtrl', function($scope, $rootScope, profileService){
 	$scope.clickNewInfo = function(){
		// console.log($rootScope.user)
 		profileService.postBusiness(
 			$rootScope.user,
	 		$scope.businessName,
	 		$scope.businessAddress,
	 		$scope.city,
	 		$scope.state,
	 		$scope.zip,
	 		$scope.rating,
	 		$scope.comments
 		)
		};
    $scope.clickUpDate = function(){
 		profileService.getBusiness()
 		.then(function(res){
 			$scope.User = $rootScope.user ;
			$scope.businessName = res.businessName;
	 		$scope.businessAddress = res.businessAddress;
	 		$scope.city = res.city;
	 		$scope.state = res.state;
	 		$scope.zip = res.zip;
	 		$scope.rating = res.rating;
	 		$scope.comments = res.comments;
 		})
 	};
});
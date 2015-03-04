angular.module('groupProject')
.controller('profileCtrl', function($scope, profileService){
 	$scope.clickRegister = function(){
 		profileService.postProfile(
	 		$scope.email,
	 		$scope.password,
	 		$scope.businessName,
	 		$scope.businessAddress,
	 		$scope.city,
	 		$scope.state,
	 		$scope.zip,
	 		$scope.vote
 		)
 	};
	$scope.upVote = function () {
        $scope.vote++;
    }
    $scope.downVote = function () {
        $scope.vote--;
    }
    $scope.vote = 0;
});
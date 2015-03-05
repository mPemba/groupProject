angular.module('groupProject')
.controller('profileCtrl', function($scope, profileService){
 	$scope.clickRegister = function(){
 		profileService.postProfile(
	 		$scope.email,
	 		$scope.password
 		)
 	};
 	$scope.clickNewInfo = function(){
 		profileService.postBusiness(
	 		$scope.email,
	 		$scope.password,
	 		$scope.businessName,
	 		$scope.businessAddress,
	 		$scope.city,
	 		$scope.state,
	 		$scope.zip,
	 		$scope.vote,
	 		$scope.comments
 		)
 			$scope.businessName = '';
	 		$scope.businessAddress = '';
	 		$scope.city = '';
	 		$scope.state = '';
	 		$scope.zip = '';
	 		$scope.votes = '';
	 		$scope.comments = '';
	 	clearInfo();
		$scope.upVote = function () {
        	$scope.vote++;
    }
	    $scope.downVote = function () {
	        $scope.vote--;
    }
    	$scope.vote = 0;
    };
    $scope.clickUpDate = function(){
 		profileService.getBusiness(
	 		$scope.email,
	 		$scope.password,
	 		$scope.businessName,
	 		$scope.businessAddress,
	 		$scope.city,
	 		$scope.state,
	 		$scope.zip,
	 		$scope.vote,
	 		$scope.comments
 		)
 			$scope.businessName = '';
	 		$scope.businessAddress = '';
	 		$scope.city = '';
	 		$scope.state = '';
	 		$scope.zip = '';
	 		$scope.vote = '';
	 		$scope.comments = '';
 	};
	$scope.upVote = function () {
        $scope.vote++;
    }
    $scope.downVote = function () {
        $scope.vote--;
    }
    $scope.vote = 0;
});
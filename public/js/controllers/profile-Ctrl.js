angular.module('groupProject')
// .controller('profileCtrl', function($scope, profileService){
//  	$scope.clickRegister = function(){
//  		profileService.postProfile(
// 	 		$scope.email,
// 	 		$scope.password
//  		)
//  	}
//  });
.controller('ProfileController', function($scope, profile) {
	$scope.profile = profile;
}); 
angular.module('groupProject')
.controller('authCtrl', function($scope, $location, AuthService, $rootScope) {
	$scope.state = 'login';
	$scope.clickLogin = function() {
		AuthService.login($scope.email, $scope.password).then(function(response) {
			$rootScope.user = response;
			// console.log($rootScope.user);
			$location.path('/home');
		}).catch(function(err) {
			$scope.loginError = true;
		});
	};
	$scope.clickRegister = function() {
		AuthService.register($scope.email, $scope.password).then(function() {
			$scope.state = 'login';
			$scope.registerSuccessful = true;
		}).catch(function(err) {
			$scope.regError = true;
		});
	};
	$scope.changeState = function(newState) {
		$scope.loginError = false;
		$scope.regError = false;
		$scope.state = newState;
	};
});
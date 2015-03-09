angular.module('groupProject', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/views/login-view.html',
			controller: 'authCtrl'
		 })
		.when('/home', {
			templateUrl: '/views/home.html',
			controller: 'homeCtrl'
		})
		.when('/profile', {
			templateUrl: '/views/profile-view.html',
			controller: 'profileCtrl',
			resolve: {
			profile: function(profileService) {
				return profileService.getBusiness();
				}
			}
		})
		.otherwise({
			redirectTo: '/'
		});
});
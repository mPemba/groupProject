angular.module('groupProject', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'views/login-view.html',
			controller: 'authCtrl'
		 })
		.when('/profile', {
			templateUrl: 'views/profile-view.html',
			controller: 'profileCtrl',
			resolve: {
			profile: function(ProfileService) {
				return ProfileService.getProfile();
				}
			}
		})
		.otherwise({
			redirectTo: '/'});
});
angular.module('groupProject', ['ngRoute', 'ui.bootstrap'])
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


angular.module('groupProject').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
});
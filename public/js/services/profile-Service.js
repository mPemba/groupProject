angular.module('groupProject')
.service('profileService', function($q, $http, $location) {
	this.getProfile = function() {
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: '/api/getProfile'
		}).then(function(response) {
			dfd.resolve(response.data);
		});
		return dfd.promise;
	};
	this.postProfile = function(email, password){
		var dfd = $q.defer();
		$http({
			method: 'POST',
			url: '/api/postProfile',
			data: {
				email: email,
				password: password
			}
		}).success(function(response){
            dfd.resolve(response);
        }).catch(function(err){
            dfd.reject(err);
        });
        return dfd.promise;
    };
    this.postBusiness = function(
			email,
			password,
			businessName,
			businessAddress,
			city,
			state,
			zip,
			vote
		){
		var dfd = $q.defer();
		$http({
			method: 'POST',
			url: '/api/postBusiness',
			data: {
				email: email,
				password: password,
				businessName: businessName,
				businessAddress: businessAddress,
				city: city,
				state: state,
				zip: zip,
				vote: vote
			}
		}).success(function(response){
            dfd.resolve(response);
        }).catch(function(err){
            dfd.reject(err);
        });
        return dfd.promise;
    };
     this.getBusiness = function(
			email,
			password,
			businessName,
			businessAddress,
			city,
			state,
			zip,
			vote
		){
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: '/api/getBusiness',
			data: {
				email: email,
				password: password,
				businessName: businessName,
				businessAddress: businessAddress,
				city: city,
				state: state,
				zip: zip,
				vote: vote
			}
		}).success(function(response){
            dfd.resolve(response);
        }).catch(function(err){
            dfd.reject(err);
        });
        return dfd.promise;
    };
});
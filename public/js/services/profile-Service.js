angular.module('groupProject')
.service('profileService', function($q, $http, $location){
 	this.getBusiness = function(){
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: '/api/getBusiness'
		}).success(function(response){
			console.log(response);
            dfd.resolve(response[0]);
        }).catch(function(err){
            dfd.reject(err);
        });
        return dfd.promise;
    };
    this.postBusiness = function (user, businessName, businessAddress, city, state, zip, vote, comments){
		var dfd = $q.defer();
		// console.log(user)
		$http({
			method: 'POST',
			url: '/api/postBusiness',
			data: {
				userId: user,
				businessName: businessName,
				businessAddress: businessAddress,
				city: city,
				state: state,
				zip: zip,
				vote: vote,
				comments: comments
			}
		}).success(function(response){
			console.log(response);	
            dfd.resolve(response);
        }).catch(function(err){
            dfd.reject(err);
        });
        return dfd.promise;
    };
});
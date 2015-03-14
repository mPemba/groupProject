angular.module('groupProject')
.service('profileService', function($q, $http){
 		this.getBusiness = function(businessName, businessLocation){
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: '/api/getBusiness' + "?businessName=" + businessName + "&businessLocation=" + businessLocation
		}).success(function(response){
			//console.log(response);
            dfd.resolve(response);
        }).catch(function(err){
            dfd.reject(err);
        });
        return dfd.promise;
    };
});

// /api/getBusiness?businessName=Red Robin Gourmet Burgers?businessLocation=1200 Towne Centre Boulevard, Unit 1100, Provo
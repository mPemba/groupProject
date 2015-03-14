var businessModel = require('../models/businessModel');
var q = require('q');

module.exports.save = function(business){
	var dfd = q.defer();
	//console.log(business)
	businessModel(business).save(function(err, res){
		if(!err) {
			dfd.resolve(res);
		}else {
			dfd.reject(err);
		}
	});
	return dfd.promise;
};
module.exports.find = function(query){
	var dfd = q.defer();
	 console.log('2222222 req.user server', query)
	businessModel.findOne(query, function(err, results){
		console.log('3333333 res.user DB err', err)
		console.log('4444444 res.user DB', results)
		if(!err){
			dfd.resolve(results)
		}else {
			dfd.reject(err)
		}
	});
	return dfd.promise;
};
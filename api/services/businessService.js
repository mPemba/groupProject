var BusinessModel = require('../models/businessModel');
var q = require('q');

module.exports.save = function(business){
	var dfd = q.defer();
	BusinessModel(business).save(function(err, res){
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
	BusinessModel.find(query, function(err, results){
		if(!err){
			dfd.resolve(results)
		}else {
			dfd.reject(err)
		}
	});
	return dfd.promise;
};
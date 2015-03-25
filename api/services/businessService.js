var businessModel = require('../models/businessModel');
var q = require('q');

module.exports.save = function(business){
	var dfd = q.defer();
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
	businessModel.findOne(query, function(err, results){
		if(!err){
			dfd.resolve(results)
		}else {
			dfd.reject(err)
		}
	});
	return dfd.promise;
};
module.exports.update = function(business){
	var dfd = q.defer();
	var query = {_id: business._id};
	var update = {comment: business.comment, rating: business.rating};
	businessModel.findOneAndUpdate(query, update , function(err, res){
        if(!err) {
			dfd.resolve(res);
		}else {
			dfd.reject(err);
		}
	});
	return dfd.promise;
};
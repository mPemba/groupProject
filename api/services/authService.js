var AuthModel = require('../models/authModel');
var q = require('q');

module.exports.save = function(profile){
	var dfd = q.defer();
	AuthModel(profile).save(function(err, res){
		if(!err) {
			dfd.resolve(res);
		}else {
			dfd.reject(err);
		}
	});
	return dfd.promise;
};
module.exports.find = function(req, res){
	var dfd = q.defer();
	AuthModel.find({})
	.then(function(response){
		if(response.length){
			res.status(200).json(response);
		}else {
			res.status(404).send('nothing found');
		}
	}), function(err){
		res.status(500).json(err);
	}
};
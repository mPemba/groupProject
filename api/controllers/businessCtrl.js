var businessService = require('../services/businessService');

module.exports.post = function(req, res){
	businessService.save(req.body)
		.then(function(response){
			res.status(200).json(response);
		}), function(err){
			res.status(400).json(err);
		}
};
module.exports.get =function(req, res){
	businessService.find({})
	.then(function(response){
		if(response.length){
			res.status(200).json(response);
		}else {
			res.status(404).send('nothing sent');
		}
	}), function(err){
		res.status(500).json(err);
	}
};
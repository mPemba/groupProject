var businessService = require('../services/businessService');

module.exports.post = function(req, res){
	businessService.save(req.body)
		.then(function(response){
s
			res.status(200).json(response);
		}, function(err){
			res.status(400).json(err);
		})
};
module.exports.get =function(req, res){
	businessService.find({businessName: req.query.businessName, businessLocation: req.query.businessLocation })
	.then(function(results){
		if(results){
			res.status(200).json(results);
		} else {
			res.status(404).send('nothing sent');
		}
	}), function(err){
		res.status(500).json(err);
	}; 
};
module.exports.put = function(req, res){
	businessService.update(req.body)
	.then(function(response){
		res.status(200).json(response);
	}, function(err){
		res.status(400).json(err)
	})
};

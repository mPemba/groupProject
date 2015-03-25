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
	 //console.log(3333333333, req.query)
	businessService.find({businessName: req.query.businessName, businessLocation: req.query.businessLocation })
	.then(function(results){
		//console.log(444444444, results)
		if(results){
			res.status(200).json(results);
		} else {
			res.status(404).send('nothing sent');
		}
	}), function(err){
		//console.log(555555555555, err)
		res.status(500).json(err);
	}; 
};
module.exports.put = function(req, res){
	console.log(555555555, req.body)
	businessService.update(req.body)
	.then(function(response){
		//console.log(666666666, response);
		res.status(200).json(response);
	}, function(err){
		res.status(400).json(err)
		//console.log(7777777, err);
	})
};
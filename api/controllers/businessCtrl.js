var businessService = require('../services/businessService');

module.exports.post = function(req, res){
	businessService.save(req.body)
		.then(function(response){
			res.status(200).json(response);
		}, function(err){
			res.status(400).json(err);
		})
};
module.exports.get =function(req, res){

	 //console.log('1111111 user req server', req.query)
	businessService.find({businessName: req.query.businessName, businessLocation: req.query.businessLocation })
	.then(function(results){
		//console.log('5555555 res.user DB', results)
		if(results){
			res.status(200).json(results);
		} else {
			res.status(404).send('nothing sent');
		}
	}), function(err){
		//console.log('6666666 res.user DB err', err)
		res.status(500).json(err);
	}; 
};
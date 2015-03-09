module.exports = {
	profile: function(req, res) {
		//console.log(req.user)
		return res.json(req.user);
	}
}; 
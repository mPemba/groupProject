var mongoose = require('mongoose');

var schema = mongoose.Schema({
	businessName: String,
	businessAddress: String,
	  city: String,
	  state: String,
	  zip: String,
	upvotes: {type: Number, default: 0},
})

module.exports = mongoose.model('Business', schema);
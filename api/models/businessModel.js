var mongoose = require('mongoose')

var schema = mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
	businessName: String,
	businessAddress: String,
	  city: String,
	  state: String,
	  zip: String,
	rating: Number,
	comments: String
});

module.exports = mongoose.model('Business', schema);
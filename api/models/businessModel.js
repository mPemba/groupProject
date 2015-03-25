var mongoose = require('mongoose')

var schema = mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
	businessName: String,
	businessLocation: { type: String, unique: true},
	rating: Number,
	comment: String
});

module.exports = mongoose.model('Business', schema);
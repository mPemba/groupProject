var mongoose = require('mongoose');
var Customer = require('./../models/profileModel');
var Schema = mongoose.Schema

var businessSchema = Schema({
	email: [{ type: Schema.Types.ObjectId, ref: 'Profile' }],
	//password: [{ type: Schema.Types.ObjectId, ref: 'Profile' }],
	businessName: String,
	businessAddress: String,
	  city: String,
	  state: String,
	  zip: String,
	upvotes: Number
})

module.exports = mongoose.model('Business', businessSchema);
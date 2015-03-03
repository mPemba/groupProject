var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var q = require('q');

var ProfileSchema = mongoose.Schema({
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true}
});

ProfileSchema.pre('save', function(next){
	var user = this;
	if (!user.isModified('password')) {
		return next();
	}
	bcrypt.genSalt(12, function(err, salt){
		if(err) {
			return next(err);
		}
		bcrypt.hash(user.password, salt, function(err, hash){
			if(err) return next(err);
			user.password = hash;
			return next();
		});
	}); 
});
ProfileSchema.methods.comparePassword = function(pass){
	var dfd = q.defer();
	bcrypt.compare(pass, this.password, function(err, isMatch){
		if(err) {
			dfd.reject(err);
		}
		else {
			dfd.resolve(isMatch);
		}
	});
	return dfd.promise;
};

module.exports = mongoose.model('Profile', ProfileSchema);
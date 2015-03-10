var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var cors = require('cors');
mongoose.connect('mongodb://localhost/groupProject');

// Routing =======================
var User = require('./api/models/authModel');
var AuthCtrl = require('./api/controllers/authCtrl');
var BusinessCtrl = require('./api/controllers/businessCtrl');

// Middleware =========================
passport.use(new localStrategy({
	//require the defualt username to be the person's email address 
	usernameField: 'email',
	passwordField: 'password'
}, 	function(username, password, done){
	User.findOne({ email: username }).exec().then(function(user){
		if(!user){
			return done(null, false, { message: 'Incorrect username.' });
		}
		user.comparePassword(password).then(function(isMatch){
			if(!isMatch){
				return done(null, false, { message: 'Incorrect password.' });
			}
			return done(null, user);
		}, function(err){
			console.log(err)
		});
	}, function(err){
		return done(err);
	});
}));

passport.serializeUser(function(user, done){
	//input user model (mongoose)
	done(null, user);
});
passport.deserializeUser(function(obj, done){
	//user object (json)
	done(null, obj);
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));
app.use(session({secret: 'GROUPSEEKRIT', 
	saveUninitialized: true,
    resave: true}));
app.use(passport.initialize());
app.use(passport.session());

// Authentication ========================
app.post('/api/auth', passport.authenticate('local'), function(req, res){
	//if auth was successful, this will happen
	// console.log(req.user._id);
	return res.status(200).json(req.user._id);
});
app.post('/api/register', function(req, res) {
	//create a user
	var newUser = new User(req.body);
	newUser.save(function(err, user) {
		if (err) {
			return res.status(500).end();
		}
		return res.json(user);
	});
});

// Endpoints =============================== 
app.get('/api/auth', AuthCtrl.profile);

app.get('/api/getBusiness', BusinessCtrl.get);
app.post('/api/postBusiness', BusinessCtrl.post);

app.listen(8000);
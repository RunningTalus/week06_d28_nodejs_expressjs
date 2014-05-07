var express = require('express');
var app = express();
app.set('view engine', 'jade');  //sets the view engine to jade
app.set('views', __dirname + '/views');  //sets the full path with __dirname


var hikes = [
	'Bear Peak',
	'Sanitas',
	'Chatauqua'
];

var user = {
	name: 'Dave',
	favoriteHike: 'Sanitas'
};


//route for home page
app.get('/', function(req, res) {
	//render views/index.jade
	//the second argument to res.render is 'view data'
	res.render('index', { 
		//any properties on this object literal become part of the scope of the jade view
		boulderHikes: hikes,
		//the key is what it's called in the jade file
		//the property value is the actual data that gets sent to the view, and it is evaluated BEFORE being sent to the view
		currentUser: user
		// currentUser: user.name,
		// favoriteHike: user.favoriteHike

	});
	// res.render('index');  //within express, this now refers to the index.jade- once we install jade via 'npm install jade --save'
});

//route for dodgeball page
app.get('/dodgeball', function(req, res) {
	res.render('dodgeball');
});

var server = app.listen(7414, function() {
	console.log('Express server listening on port ' + server.address().port);
});

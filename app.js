var express = require('express');
var app = express();
app.set('view engine', 'jade');  //sets the view engine to jade
app.set('views', __dirname + '/views');  //sets the full path with __dirname


//route for home page
app.get('/', function(req, res) {
	res.render('index');  //within express, this now refers to the index.jade- once we install jade via 'npm install jade --save'
});

//route for dodgeball page
app.get('/dodgeball', function(req, res) {
	res.render('dodgeball');
});

var server = app.listen(7414, function() {
	console.log('Express server listening on port ' + server.address().port);
});

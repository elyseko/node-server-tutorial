var express = require('express');
var app = express();

var cats = [
	{
		id: "cats:1",
		type: "american shorthair",
		color: "gray",
		gender: "female",
		age: 6,
		name: "gracie"
	},
	{
		id: "cats:2",
		type: "american shorthair",
		gender: "male",
		age: 4,
		name: "geno",
	},
	{
		id: "cats:3",
		type: "internet",
		gender: "female",
		age: 10,
		name: "Tardar Sauce",

	},
	{
		id: "cats:4",
		type: "internet",
		gender: "male",
		age: "deceased",
		name: "Fatso",
	},
	{
		id: "cats:5",
		type: "internet",
		gender: "pop-tart",
		age: "unknown",
		name: "nyan",
	}
];

var getCatsById = function( id ) {
	for (var i = cats.length - 1; i >= 0; i--) {
		if( cats[i].id === id ) {
			return cats[i];
		}
	};
}

var getCatsByName = function( name ) {
	for (var i = cats.length - 1; i >= 0; i--) {
		if( cats[i].name === name ) {
			return cats[i];
		}
	};
}

app.get('/cats', function(req, res){
  res.send(cats);
});

app.get('/cats/:id', function(req, res){
  res.send( getCatsById( req.params.id ) );
});

app.get('/catByName/:name', function(req, res){
	res.send( getCatsByName( req.params.name ) );
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
var cats = undefined;
//This would be replaced with a database
cats = [
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

exports.all = function() {
	return cats;
}

exports.create = function( cat ) {
	console.log(cat)
	cats.push(cat);
	return true;
}

exports.findByName = function( name ) {
	for (var i = cats.length - 1; i >= 0; i--) {
		if( cats[i].name === name ) {
			return cats[i];
		}
	};
	return { 
				error: "no data", 
				msg: "no cat found", 
				name: name 
			};
}

exports.findById = function( id ) {
	for (var i = cats.length - 1; i >= 0; i--) {
		if( cats[i].id === id ) {
			return cats[i];
		}
	};
	return { 
				error: "no data", 
				msg: "no cat found", 
				name: id 
			};
}
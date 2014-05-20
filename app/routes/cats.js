var express = require('express');
var db = require('../config/MockData');
var router = express.Router();

/* GET all cats. */
router.get('/', function(req, res) {
  res.send(db.all());
});

/* PUT new cat. */
router.put('/new', function(req, res){
	// console.log(req);
  var cat = {
  	gender: req.headers.gender,
  	name: req.headers.name,
  	type: req.headers.type
  }
  db.create(cat);
  res.send("success");
});

router.get('/:id', function(req, res){
	res.send(db.findById(req.params.id));
});

router.get('/name/:name', function(req, res){
	res.send(db.findByName(req.params.name));
});

module.exports = router;

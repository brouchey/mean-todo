'use strict';

var express = require('express');
var Todo = require('../models/todo');	// use our Todo model
// var todos = require('../../mock/todos.json');	// import mock todos

var router = express.Router();

router.get('/todos', function(req, res) {
	// res.json({todos: todos});	// get and return mock todos object
	// getting out todos
	Todo.find({}, function(err, todos) {	// 1st: Object, 2nd: callback function
		if(err) {
			return res.status(500).json({message: err.message});
		}
		res.json({todos: todos});
     });
});

// TODO: Add POST route to create new entries
// TODO: Add PUT route to update existing entries
// TODO: Add DELETE route to delete entries

module.exports = router;	// export router module
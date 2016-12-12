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
router.post('/todos', function(req, res) {
	var todo = req.body;     // we need a body parser
	Todo.create(todo, function(err, todo) {
		if(err) {     // if error
			return res.status(500).json({err: err.message});     // send error
		}
		res.json({'todo': todo, message: 'Todo created'});     // else create todo
     });   
});

// TODO: Add PUT route to update existing entries
router.put('/todos/:id', function(req, res) {     // we add an id
	var id = req.params.id;     // now we can get the id parameter from the request
	var todo = req.body;
	if(todo && todo._id !== id) {     // if there is a todo and if the todo id does not match the requested id
		return res.status(500).json({err: "IDs dont match !"});     // return error
	}
	Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo) {		// {new: true} is used so Mongoose returns the new record
		if(err) {
			return res.status(500).json({ err: err.message });
		}
		res.json({'todo': todo, message: 'Todo updated'});
     });
});

// TODO: Add DELETE route to delete entries

module.exports = router;	// export router module
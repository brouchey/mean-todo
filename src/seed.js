'use strict';

var Todo = require('./models/todo.js');

// Creating some seed datas
var todos = [
	'Feed the dog',
	'Walk the kids',
	'Water the trees'
];

todos.forEach(function(todo, index) {		// for each element in our todos
	Todo.find({'name': todo}, function(err, todos) {	// looking for name
		if(!err && !todos.length) {			// if no error and todo doesn't exist
			Todo.create({completed: false, name: todo});	// create that todo
		};
	});
});
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
		if(!err && !todos.length) {			// if we don't find that todo and no error
			Todo.create({completed: false, name: todo});	// we create that todo
		};
	});
});
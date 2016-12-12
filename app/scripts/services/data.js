'use strict';

var angular = require('angular');

angular.module('todoListApp')
.service('dataService', function($http, $q) {
	this.getTodos = function(cb) {
		$http.get('/api/todos').then(cb);
	};
  
	this.deleteTodo = function(todo) {
		console.log("I deleted the " + todo.name + " todo!");
	};
  
	this.saveTodos = function(todos) {
		var queue = [];
		todos.forEach(function(todo) {
			var request;
			if(!todo._id) {     // if our todo does not have an ID
				request = $http.post('/api/todos', todo)     // create it with POST
			} else {     // if the todo has an ID
				request = $http.put('/api/todos' + todo._id, todo)	// update it with PUT
				.then(function(result) {
					todo = result.data.todo;
					return todo;
				});
			};
			queue.push(request);     // push a request to the queue
			return $q.all(queue).then(function(results) {     // promise
			// runs each request in parallels
				console.log("I saved " + todos.length + " todos!");
			});
		});
	};
});

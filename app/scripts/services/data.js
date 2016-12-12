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
			if(!todo._id) {     // if our todo does not have an id
				request = $http.post('/api/todos', todo)     // post a request
			};
			queue.push(request);     // push a request to the queue
			return $q.all(queue).then(function(results) {     // promise
			// runs each request in parallels
				console.log("I saved " + todos.length + " todos!");
			});
		});
	};
});

'use strict';
var express = require('express');
var todos = require('../../mock/todos.json');	// import mock todos
var router = express.Router();

router.get('/todos', function(req, res) {
     res.json({todos: todos});	// get mock todos object
});

// TODO: Add POST route to create new entries
// TODO: Add PUT route to update existing entries
// TODO: Add DELETE route to delete entries

module.exports = router;	// export router module
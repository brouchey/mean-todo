'use strict';
var express = require('express');
var app = express();

app.use('/', express.static('public'));

var router = express.Router();

router.get('/todos', function(req, res) {
     res.json({todos:[]});	// return todos object
});

// TODO: Add POST route to create new entries
// TODO: Add PUT route to update existing entries
// TODO: Add DELETE route to delete entries

app.use('/api', router);	// avoid confusion between api and public routes

app.listen(3000, function() {
     console.log("The server is running on port 3000 !");
});
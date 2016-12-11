'use strict';
var express = require('express');
var router = require('./api');	// import router module

var app = express();

app.use('/', express.static('public'));

app.use('/api', router);	// avoid confusion between api and public routes, creates an alias

app.listen(3000, function() {
     console.log("The server is running on port 3000 !");
});
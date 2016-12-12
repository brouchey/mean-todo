'use strict';

var mongoose = require('mongoose');

// Create a connection to MongoDB, callback function to tell if Mongoose works correctly
mongoose.connect('mongodb://localhost/mean-todo', function(err) {
     if(err) {
         console.log('Failed connecting to Mongodb !'); 
     } else {
          console.log('Successfully connected to Mongodb !'); 
     }
});
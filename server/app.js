var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var index = require('./routes/index');

// middleware
app.use(express.static('public')); 
app.use(bodyParser.json());

// routing
app.use('/', index);

//  database connection

// server listen
var port = process.env.PORT || 5000;    // required for deployment
app.listen(port, function() {
    console.log('listening on port: ', port);
});
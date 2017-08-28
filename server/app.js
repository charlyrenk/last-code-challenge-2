var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var index = require('./routes/index');
var messages = require('./routes/messages')
// middleware
app.use(express.static('public')); 
app.use(bodyParser.json());

// routing
app.use('/', index);
app.use('/messages', messages);

//  database connection
var databaseUrl = 'mongodb://localhost:27017/messages';
mongoose.connect(databaseUrl,
    {
        useMongoClient: true
    });

// optional, but very nice
mongoose.connection.on('connected', function () {
    console.log('mongoose connected to : ', databaseUrl);
});
mongoose.connection.on('error', function (err) {
    console.log('mongoose connection error to : ', err);
});

// server listen
var port = process.env.PORT || 5000;    // required for deployment
app.listen(port, function() {
    console.log('listening on port: ', port);
});
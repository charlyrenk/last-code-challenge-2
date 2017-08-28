var express = require('express');
var router = express.Router();
var path = require('path');
var saleListing = require('../models/messages.schema');
router.post('/', function(req, res) {
    console.log('new listing to add: ', req.body);

    var newMessage;

    // fields that rent and sale have in commmon
    var messageObject = {
        name: req.body.name,
        message: req.body.message
    };
    // save to the selected schema
    newMessage.save(function(err, data) {
        if (err) {
            console.log('save error: ', err);
            res.sendStatus(500);
        } else {
            console.log('saved data: ', data);
            res.sendStatus(201);
        }
    });

});
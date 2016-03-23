/**
 * Created by Dunna on 3/15/2016.
 */
'use strict';

var express = require('express'),
    mongoose =require ('mongoose'),
    config = require('./config/config');

var db = mongoose.connect(config.db, function(error){
    if (error){
        console.error('unable to connect to DB');
        console.error(error);
    }
    console.log('Connected to DB'+config.db);
});

var app = require('./config/express')(db);

app.listen(config.port, function(error){
    if (error){
        console.error('unable to listen on port'+config.port);
        console.error(error);
    }
    console.log('Listening on port '+config.port);
});
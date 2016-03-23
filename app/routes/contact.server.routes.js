/**
 * Created by Dunna on 3/16/2016.
 */
'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    router =  express.Router();

module.exports = function(app){

    var contact = require('../../app/controllers/contact.server.controller');
    router
        .use(bodyParser.json())
        .route('/contact')
        .get(contact.getAllContacts)
        .post(contact.postNewContact)
        .put(contact.updateContact);
    router
        .param('id' ,function(req,res,next){
          //  dbquery = req.params.id;
            next();
        })
        .route('/contact/:id')
        .get(contact.getOneContact)
        .delete(contact.deleteContact);


    app.use('/api', router);
};
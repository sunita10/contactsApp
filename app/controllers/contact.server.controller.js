/**
 * Created by Dunna on 3/16/2016.
 */
'use strict';

var mongoose = require('mongoose'),
    express = require('express'),
    Contact = mongoose.model('Contact');

module.exports.getAllContacts = function(req, res){

    Contact.find({}, function(err, contacts) {
        if (err) throw err;
       // console.log(contacts);
        res.json(contacts);
    });
};
module.exports.postNewContact = function(req,res){
    console.log(req.body);
    var contact = new Contact(req.body);
    contact.save(contact ,function(err,result){
        if (err) throw err;
        console.log('new contact saved to db' +result);
        res.json(result);
    });
};
module.exports.getOneContact = function(req,res){
    console.log('in getOneContact');
    console.log(req.params.id);
    var contact = Contact.findOne({ '_id' : req.params.id} ,function(err,contact){
        if (err) throw err;
        console.log('find contact '+contact);
        res.json(contact);
    });
};
module.exports.updateContact = function(req,res){
    console.log('in UpdateContact');
    console.log(req.params.id,req.body,req.body._id);
    var contact = Contact.findOneAndUpdate({ '_id' : req.body._id} , req.body ,function(err,contact){
        if (err) throw err;
        console.log('update the contact'+contact);
        res.json(contact);
    });
};

module.exports.deleteContact = function(req,res){
    console.log('in deleteContact');
    console.log(req.params.id,req.body._id);
    var contact = Contact.findOneAndRemove({ '_id' : req.params.id} ,function(err){
        if (err) throw err;
        console.log('deleted the contact');
    });
};

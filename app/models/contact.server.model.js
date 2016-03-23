/**
 * Created by Dunna on 3/16/2016.
 */
'use strict';

var mongoose = require('mongoose'),
    schema = mongoose.Schema;

var _contact = new schema({
    firstName: {
        type: String,
        default: '',
        trim: true
    },
    lastName: {
        type: String,
        default: '',
        trim: true
    }
});

mongoose.model('Contact', _contact);
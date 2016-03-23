/**
 * Created by Dunna on 3/15/2016.
 */
'use strict';

module.exports = function (app) {
    var core = require('../../app/controllers/core.server.controller');
    app
        .route('/')
        .get(core.index);
}
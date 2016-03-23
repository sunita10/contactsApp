/**
 * Created by Dunna on 3/15/2016.
 */
'use strict';

module.exports.index = function (req,res){
    console.log('controller index');
    res.render('index');
};
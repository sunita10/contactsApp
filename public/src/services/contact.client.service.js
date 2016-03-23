/**
 * Created by Dunna on 3/16/2016.
 */
'use strict';

angular
    .module('ContactsApp')
    .factory('Contact', function($resource){
        return $resource('api/contact/:id', { id : '@id'},
            {'update' : { method : 'PUT' }
            });
    });
/**
 * Created by Dunna on 3/16/2016.
 */
'use strict';

angular
       .module('ContactsApp')
       .config(function($routeProvider,$locationProvider){

           $routeProvider
               .when('/contacts',{
                   controller : 'ListController',
                   templateUrl : 'src/views/list.client.tpl.html'
               })
               .when('/contacts/new',{
                   controller: 'AddNewContact',
                   templateUrl :'src/views/add.client.tpl.html'
               })
               .when('/contacts/:id' ,{
                   controller : 'EditContact',
                   templateUrl : 'src/views/edit.client.tpl.html'
               })
               .otherwise({
                   redirectTo : '/contacts'
               });
           $locationProvider.html5Mode(true);
       });
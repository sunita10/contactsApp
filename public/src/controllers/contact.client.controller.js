/**
 * Created by Dunna on 3/16/2016.
 */
'use strict';

angular
    .module('ContactsApp')
    .controller('ListController', function($scope, Contact, $location){
        console.log('Within List Controller');
        $scope.fields = ['firstName', 'lastName'];
        $scope.contacts = Contact.query();
        //console.log($scope.contacts);
        $scope.showContact = function(id){
            console.log('showContact')
            $location.url('/contacts/' + id);
            console.log('/contacts/'+id);
        }
    })
    .controller('AddNewContact',function($scope,$location,Contact) {
        console.log("within Add NEW Contact");
        $scope.addContact = function () {
            var newContact = new Contact({
                firstName: $scope.newfirstName,
                lastName: $scope.newlastName
            });
            console.log('adding  ......');
            console.log(newContact);
            newContact.$save();
            $location.url('/contacts');
        }
    })
    .controller('EditContact',function($scope,$routeParams,$location,Contact){
        console.log($routeParams.id);
        $scope.contact = Contact.get({ id : $routeParams.id });
        $scope.updateContact = function(){
            console.log($scope.contact);
            $scope.contact.$update();
            $location.url('/contacts');
        }
        $scope.deleteContact = function(id){
            console.log('delete'+$scope.contact._id);

            $scope.contact.$delete( {'id': id} ,function(){
                console.log('deleted')
            });
            $location.url('/contacts');
        }
        console.log('edit contact');
    });
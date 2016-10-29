
(function() {

  'use strict';

  angular.module('myapps.contact')
    .controller('ContactController', Contact);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function Contact($scope, $location, $window){
      
      
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      
      /*******************************************************************************
      *  Close the given popup
      ********************************************************************************/
      $scope.close = function(id) {
          $('#'+id).hide();
          $('#contact-overlay').hide();
      };
      
      /*******************************************************************************
      *  Check that they filled out the form correctly and if you send it off
      ********************************************************************************/
     $scope.submit = function(cinfo) {
         var contact = cinfo;
        $('#loading').show();
        $('#contact-overlay').show();
        var message = "<p id='header'>Looks like something is missing?</p>";
        message = message + "<p id='sub-header'>Could We Have:</p>";
        var valid = true;
        if(contact == undefined || contact.name == undefined || contact.name == null || contact.name.length == 0) {
            valid = false;
            message = message + "<p class='item'>Your Name</p>";
        }
        if(contact == undefined || contact.info == undefined || contact.info == null || contact.info.length == 0) {
            valid = false;
            message = message + "<p class='item'>Your SSO or Email</p>";
        }
        if(contact == undefined || contact.message == undefined || contact.message == null || contact.message == 0) {
            valid = false;
            message = message + "<p class='item'>Your Feedback</p>";
        }
         
        if(valid) {
            send(contact);
        }else {
            $("#error #content")[0].innerHTML = message;
            $('#loading').hide();
            $('#error').show();
        }
     };
      
      
      /*******************************************************************************
      *  Send the feedback to MyApps Admin using ajax call
      ********************************************************************************/
      var send = function(contact) {
        



       
         setTimeout(function(){
             $('#loading').hide();
             $('#thanks').hide();
             $('#contact-overlay').hide();
         }, 2000);
        
    };
      
      
    
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {

    });
      
};




}());


    
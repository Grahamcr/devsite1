
(function () {
    'use strict';

    angular.module('myapps')
    
    
    
    
        /**********************************************************************
        * Header Directive contains the HTML for the page header used on each
        * page of FooBar
        ***********************************************************************/
        .directive('header', function () {
            return {
                templateUrl: 'app/shared/templates/header.html'
            };
        })
    
       
    
    
        ;
}());



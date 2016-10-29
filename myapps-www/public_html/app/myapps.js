
'use strict';

angular.module('myapps', [
    'ngResource',
    'myapps.home',
    'myapps.getstarted',
    'myapps.contact',
    'myapps.faq'
    
]).config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
}]);
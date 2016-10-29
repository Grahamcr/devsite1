
(function() {
  
  'use strict';

  angular.module('myapps.faq')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/faq', {
        controller: 'FaqController',
        templateUrl: 'app/faq/faq.html'
      });
  }

}());

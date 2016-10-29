
(function() {

  'use strict';

  angular.module('myapps.faq')
    .controller('FaqController', Faq);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function Faq($scope, $location, $window){
	  var userAgent = $window.navigator.userAgent;
	  if(/mac/i.test(userAgent)){
		  $scope.fileName = 'DeviceRegistration.dmg'
		  $scope.downloadUrl = 'libs/DeviceRegistration.dmg'	     
	  }  
	  else{
		  $scope.fileName = 'MyApps_Anywhere.exe'
		  $scope.downloadUrl = 'libs/MyApps_Anywhere.exe'
      }
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
        $scope.firstAnnimationRun = false;
        $scope.secondAnnimationRun = false;
        $scope.thirdAnnimationRun = false;
     
      
    
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {
    });
      
};




}());

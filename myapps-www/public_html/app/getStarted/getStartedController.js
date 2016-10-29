
(function() {

  'use strict';

  angular.module('myapps.getstarted')
    .controller('GetStartedController', GetStarted);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function GetStarted($scope, $location, $window){
      
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
        $scope.getStartedAnnimationRan = false;
        $scope.beInformedAnnimationRan = false;
        $scope.securityAnnimationRan = false;
        $scope.productiveAnnimationRan = false;
     
      
    
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {
            $scope.getStartedAnnimationRan = false;
            $scope.beInformedAnnimationRan = false;
            $scope.securityAnnimationRan = false;
            $scope.productiveAnnimationRan = false;
    });
      
};




}());

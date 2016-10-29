
(function () {
    'use strict';

    angular.module('myapps.home')
    
    
    
        /**********************************************************************
        * Start the first annimation when it comes into view
        ***********************************************************************/
        .directive("secureAnnimation", function ($window) {
            return function(scope, element, attrs) {
                angular.element($window).bind("scroll", function() {

                    var tl = new TimelineLite();

                    var screenHeight = $(window).height();
                    var firstAnnimationBottom = element[0].getBoundingClientRect().bottom;
                    if(firstAnnimationBottom < screenHeight-150 && scope.firstAnnimationRun == false) {
                        scope.firstAnnimationRun = true;

                        tl.to("#dot", .3, {ease:Power3.easeIn, display:"inherit"});
                        tl.to("#line", .3, {ease:Power3.easeIn, display:"inherit"}, "+=.2");
                        tl.to("#sa-maa-logo", .3, {ease:Power3.easeIn, display:"inherit"}, "+=.2");
                        tl.to("#dotted-lines-2", .2, {ease:Power3.easeIn, display:"inherit"}, "+=.2");
                        tl.to("#dotted-lines-3", .2, {ease:Power3.easeIn, display:"inherit"}, "+=.1");
                        tl.to("#dotted-lines-4", .2, {ease:Power3.easeIn, display:"inherit"}, "+=.1");
                        tl.to("#dotted-lines-5", .1, {ease:Power3.easeIn, display:"inherit"}, "+=.05");
                        tl.to("#dotted-lines-6", .1, {ease:Power3.easeIn, display:"inherit"}, "+=.05");
                        tl.to("#dotted-lines-7", .05, {ease:Power3.easeIn, display:"inherit"}, "+=.05");
                        tl.to("#dotted-lines-8", .05, {ease:Power3.easeIn, display:"inherit"}, "+=.05");
                        tl.to("#dotted-lines-9", .05, {ease:Power3.easeIn, display:"inherit"}, "+=.05");
                        tl.to("#app-icons", .1, {ease:Power3.easeIn, display:"inherit"}, "+=.05");

                        tl.play();
                    }
                        

                    
                    

                    scope.$apply();
                });
            };
        })
    
    
        /**********************************************************************
        * Start the second annimation when it comes into view
        ***********************************************************************/
        .directive("connectAnnimation", function ($window) {
            return function(scope, element, attrs) {
                angular.element($window).bind("scroll", function() {

                    var tl = new TimelineLite();

                    var screenHeight = $(window).height();
                    var annimationBottom = element[0].getBoundingClientRect().bottom;
                    if(annimationBottom < screenHeight-150 && scope.secondAnnimationRun == false) {
                        scope.secondAnnimationRun = true;
                        tl.to($("#coffee .check"), .3, {ease:Power3.easeIn, display:"inherit"});
                        tl.to($("#home .check"), .3, {ease:Power3.easeIn, display:"inherit"}, "+=.2");
                        tl.to($("#hotel .check"), .3, {ease:Power3.easeIn, display:"inherit"}, "+=.2");
                        tl.to($("#airport .check"), .3, {ease:Power3.easeIn, display:"inherit"}, "+=.2");
                        tl.to($("#workplace .check"), .3, {ease:Power3.easeIn, display:"inherit"}, "+=.2");

                    }
                    tl.play();

                    scope.$apply();
                });
            };
        })
    
    
    
        /*****************************************************************************************
        * Controller for the location annimation
        *****************************************************************************************/
        .directive("locationcontrol", function() {
          return {
            restrict: "E",
            controller: function($scope, $element, $attrs) {



            /*****************************************************************************************
            * Annimate the Wi-Fi Signal Icons to make it look like we are switching 
            * networks
            *****************************************************************************************/
              this.annimateNetwork = function(networkID) {
                  
                  var tl = new TimelineLite();
                    
                  
                  //change connection status from connected to detecting
                  tl.to($("#connection-status #connected"), .1, {ease:Power3.easeOut, display:"none"}, "+=2.0");
                  tl.to($("#connection-status #detecting"), .1, {ease:Power3.easeOut, display:"inherit"});
                  
                  //Change connection status icon to no connection
                  tl.to($("#connection-imgs #on-ge"), .1, {ease:Power3.easeOut, display:"none"}, "-=.1");
                  tl.to($("#connection-imgs #no-connection"), .1, {ease:Power3.easeOut, display:"inline-block"}), "-=.1";
                  
                  //Change the network status label to none
                  tl.to($("#network-status #work"), .1, {ease:Power3.easeOut, display:"none"}, "-=.2");
                  tl.to($("#network-status #home"), .1, {ease:Power3.easeOut, display:"none"}, "-=.1");
                  tl.to($("#network-status #coffee"), .1, {ease:Power3.easeOut, display:"none"}, "-=.1");
                  tl.to($("#network-status #none"), .1, {ease:Power3.easeOut, display:"inherit"}, "-=.1");
        
                  //Change the network status icon to the red disconnected icon
                  tl.to($("#network-imgs #blue"), .1, {ease:Power3.easeOut, display:"none"}, "-=.1");
                  tl.to($("#network-imgs #green"), .1, {ease:Power3.easeOut, display:"none"}, "-=.1");
                  tl.to($("#network-imgs #half"), .1, {ease:Power3.easeOut, display:"none"}, "-=.1");
                  tl.to($("#network-imgs #quarter"), .1, {ease:Power3.easeOut, display:"none"}, "-=.1");
                  tl.to($("#network-imgs #red"), .3, {ease:Power3.easeIn, display:"inline-block"});
                  
                  
                  //Change the network status icon to the quarter strength icon
                  tl.to($("#network-imgs #red"), .1, {ease:Power3.easeOut, display:"none"}, "+=.3");
                  tl.to($("#network-imgs #quarter"), .3, {ease:Power3.easeIn, display:"inline-block"});
                  
                  //Change the network status icon to the half strength icon
                  tl.to($("#network-imgs #quarter"), .1, {ease:Power3.easeOut, display:"none"}, "+=.3");
                  tl.to($("#network-imgs #half"), .3, {ease:Power3.easeIn, display:"inline-block"});
                  
                  //Change the network status icon to the quarter strength icon
                  tl.to($("#network-imgs #half"), .1, {ease:Power3.easeOut, display:"none"}, "+=.3");
                  tl.to($("#network-imgs #quarter"), .3, {ease:Power3.easeIn, display:"inline-block"});
                  
                  //Change the network status icon to the half strength icon
                  tl.to($("#network-imgs #quarter"), .1, {ease:Power3.easeOut, display:"none"}, "+=.3");
                  tl.to($("#network-imgs #half"), .3, {ease:Power3.easeIn, display:"inline-block"});
                  
                  //Change the network status icon to the blue full strength icon
                  tl.to($("#network-imgs #half"), .1, {ease:Power3.easeOut, display:"none"}, "+=.3");
                  tl.to($("#network-imgs #blue"), .3, {ease:Power3.easeIn, display:"inline-block"});
                  
                  //Change the network status icon to the green full strength icon
                  tl.to($("#network-imgs #blue"), .1, {ease:Power3.easeOut, display:"none"}, "+=.3");
                  tl.to($("#network-imgs #green"), .3, {ease:Power3.easeIn, display:"inline-block"});
                  
                  //Set the connection status icon to connected
                  tl.to($("#connection-imgs #on-ge"), .5, {ease:Power3.easeOut, display:"none"});
                  tl.to($("#connection-imgs #no-connection"), .5, {ease:Power3.easeOut, display:"none"}, "-=.5");
                   tl.to($("#connection-imgs #connected"), .2, {ease:Power3.easeIn, display:"inline-block"});
                  
                  //Set the connection status label to connected
                  tl.to($("#connection-status #disconnected"), .5, {ease:Power3.easeOut, display:"none"}, "-=.5");
                  tl.to($("#connection-status #detecting"), .5, {ease:Power3.easeOut, display:"none"}, "-=.5");
                  tl.to($("#connection-status #connected"), .3, {ease:Power3.easeOut, display:"inherit"}, "-=.2");
                  
                  //Set the network status label to the new network name
                  tl.to($("#network-status #none"), .5, {ease:Power3.easeOut, display:"none"});
                  tl.to($("#network-status #"+networkID), .1, {ease:Power3.easeOut, display:"inherit"}, "+=.1");
                  
                
                  tl.play();

              };

                
                /*****************************************************************************************
                * Annimate the home scene in and the workplace scene out *****************************************************************************************/
                  this.annimateHomeIn = function() {

                      var tl = new TimelineLite();
                      var marginRight = (screen.width/2 +500) + "px"; 
                      var marginLeft = "-" + (screen.width/2 +500) + "px"; 
                      
                      tl.to("#workplace-img", 2.0, {ease:Power3.easeOut, marginLeft:marginRight}, "+=1.0");
                      
                      tl.to("#home-office-img", .1, {ease:Power3.easeIn, marginLeft:marginLeft});
                      tl.to("#home-office-img", .1, {ease:Power3.easeIn, display:"inline-block"});
                      
                      tl.to($("#home-office-img"), 2.0, {ease:Power4.easeOut, marginLeft:"0px"});

                     
                      tl.play();

                  };
                
                
                /*****************************************************************************************
                * Annimate the home scene out and the coffee scene in *****************************************************************************************/
                  this.annimateCoffeeIn = function() {

                      var tl = new TimelineLite();
                      var marginRight = (screen.width/2 +500) + "px"; 
                      var marginLeft = "-" + (screen.width/2 +500) + "px"; 
                      
                      tl.to("#home-office-img", 2.0, {ease:Power3.easeOut, marginLeft:marginRight}, "+=1.0");
                      
                      tl.to("#coffeeshop-img", .1, {ease:Power3.easeIn, marginLeft:marginLeft});
                      tl.to("#coffeeshop-img", .1, {ease:Power3.easeIn, display:"inline-block"});
                      
                      tl.to($("#coffeeshop-img"), 2.0, {ease:Power4.easeOut, marginLeft:"0px"});

                     
                      tl.play();

                  };



            }
          };
        })
    
        /**********************************************************************
        * Start the third annimation when it comes into view
        ***********************************************************************/
         .directive('locationAnnimation', function($window) {
            return {
                require: "locationcontrol",
                link: function (scope, element, attrs, locationcontrolCtrl) {
                    
                    angular.element($window).bind("scroll", function() {

                        var tl = new TimelineLite();

                        var screenHeight = $(window).height();
                        var annimationBottom = element[0].getBoundingClientRect().bottom;
                        if(annimationBottom < screenHeight+400 && scope.thirdAnnimationRun == false) { 
                            scope.thirdAnnimationRun = true;
                            
                            setTimeout(function() {
                                locationcontrolCtrl.annimateHomeIn();

                                locationcontrolCtrl.annimateNetwork('home');
                            }, 1000);
                                
                            setTimeout(function() {
                                locationcontrolCtrl.annimateCoffeeIn();
                            
                                locationcontrolCtrl.annimateNetwork('coffee');
                            },12000);
                            
                            
                            

                        }
                        tl.play();

                        scope.$apply();

                    });
                }
            };
        })
    
    
        /***************************************************************************************
        * Scroll down when the user clicks the learn more link or down cheveron
        ****************************************************************************************/ 
        .directive("learnMoreScroll", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){

                          var target = $("#learn-more-target");
                          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                          if (target.length) {
                            $('html, body').animate({
                              scrollTop: target.offset().top
                            }, 1000);
                            return false;
                          }
                    
                });
            };
        }])

    
        /***************************************************************************************
        * Hide the mobile warning popup
        ****************************************************************************************/ 
        .directive("hideMobile", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){

                    var tl = new TimelineLite();
                    
                    tl.to($("#mobile-area"), .2, {ease:Power3.easeOut, display:"none"});
                    
                });
            };
        }])

    
        /***************************************************************************************
        * Hide the mobile warning popup
        ****************************************************************************************/ 
        .directive("mamGetStarted", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){

                    var tl = new TimelineLite();
                    
                    tl.to($("#getStarted"), .2, {ease:Power3.easeOut, display:"inherit"});
                    
                });
            };
        }])
    
    
    
        ;
}());



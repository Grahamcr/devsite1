
(function () {
    'use strict';

    angular.module('myapps.getstarted')
    
    
    
        /**********************************************************************
        * Start the second annimation when it comes into view
        ***********************************************************************/
        .directive("getStartedAnnimation", function ($window) {
            return function(scope, element, attrs) {
                angular.element($window).bind("scroll", function() {

                    var tl = new TimelineLite();

                    var screenHeight = $(window).height();
                    var annimationBottom = element[0].getBoundingClientRect().bottom;
                    if(annimationBottom < screenHeight-400 && scope.getStartedAnnimationRan == false) {
                        scope.getStartedAnnimationRan = true;
                        tl.to($("#download-btn-area .green-check"), .3, {ease:Power3.easeIn, display:"inherit"});
                        tl.to($("#download-prompt-area .green-check"), .3, {ease:Power3.easeIn, display:"inherit"}, "+=.2");
                        tl.to($("#device-reg-area .green-check"), .3, {ease:Power3.easeIn, display:"inherit"}, "+=.2");

                    }
                    tl.play();

                    scope.$apply();
                });
            };
        })
    
    
    
        /*****************************************************************************************
        * Open and close a challenge card
        *****************************************************************************************/
        .directive("beanywherecontrol", function() {
          return {
            restrict: "E",
            controller: function($scope, $element, $attrs) {



            /*****************************************************************************************
            * Annimate the Wi-Fi Signal Icons to make it look like we are switching 
            * networks
            *****************************************************************************************/
              this.play = function() {
                  
                  var tl = new TimelineLite();

                    
                    tl.from($("#coffee img"), .3, {ease:Power3.easeIn, marginLeft:"100"}, "+=.5");
                    
                    tl.to($("#coffee img"), .3, {ease:Power3.easeIn, display:"inline-block"}, "-=.3");
                 
                    tl.to($("#coffee img"), .5, {ease:Power3.easeIn, x:"-50", display:"none"}, "+=.5");
                    
                    tl.to($("#coffee img"), .1, {ease:Power3.easeIn, x:"0"});
                    
                    tl.from($("#home img"), .3, {ease:Power3.easeIn, marginLeft:"100"}, "+=.5");
                    
                    tl.to($("#home img"), .3, {ease:Power3.easeIn, display:"inline-block"}, "-=.3");
                 
                    tl.to($("#home img"), .5, {ease:Power3.easeIn, x:"-50", display:"none"}, "+=.5");
                    
                    tl.to($("#home img"), .1, {ease:Power3.easeIn, x:"0"});
                    
                    
                    tl.from($("#hotel img"), .3, {ease:Power3.easeIn, marginLeft:"100"}, "+=.5");
                    
                    tl.to($("#hotel img"), .3, {ease:Power3.easeIn, display:"inline-block"}, "-=.3");
                 
                    tl.to($("#hotel img"), .5, {ease:Power3.easeIn, x:"-50", display:"none"}, "+=.5");
                    
                    tl.to($("#hotel img"), .1, {ease:Power3.easeIn, x:"0"});
                    
                    
                    tl.from($("#airport img"), .3, {ease:Power3.easeIn, marginLeft:"100"}, "+=.5");
                    
                    tl.to($("#airport img"), .3, {ease:Power3.easeIn, display:"inline-block"}, "-=.3");
                 
                    tl.to($("#airport img"), .5, {ease:Power3.easeIn, x:"-50", display:"none"}, "+=.5");
                    
                    tl.to($("#airport img"), .1, {ease:Power3.easeIn, x:"0"});
                    
                    
                    tl.from($("#workplace img"), .3, {ease:Power3.easeIn, marginLeft:"100"}, "+=.5");
                    
                    tl.to($("#workplace img"), .3, {ease:Power3.easeIn, display:"inline-block"}, "-=.3");
                 
                    tl.to($("#workplace img"), .5, {ease:Power3.easeIn, x:"-50", display:"none"}, "+=.5");
                    
                    tl.to($("#workplace img"), .1, {ease:Power3.easeIn, x:"0", onComplete:this.play});

                    
                    tl.play();

                    
              };


            }
          };
        })
    
        /**********************************************************************
        * Start the third annimation when it comes into view
        ***********************************************************************/
         .directive('beAnywhereAnnimation', function($window) {
            return {
                require: "beanywherecontrol",
                link: function (scope, element, attrs, beanywherecontrolCtrl) {
                    
                    beanywherecontrolCtrl.play();
                }
            };
        })
    
    
    
        /**********************************************************************
        * Start the Be Informed annimation when it comes into view
        ***********************************************************************/
        .directive("beInformedAnnimation", function ($window) {
            return function(scope, element, attrs) {
                angular.element($window).bind("scroll", function() {

                    var tl = new TimelineLite();

                    var screenHeight = $(window).height();
                    var annimationBottom = element[0].getBoundingClientRect().bottom;
                    if(annimationBottom < screenHeight-50 && scope.beInformedAnnimationRan == false) {
                        scope.beInformedAnnimationRan = true;
                        
                        
                        tl.from($("#connected img"), 1, {ease:Power3.easeIn, y:"250"});
                        
                        tl.to($("#connected img"), 1, {ease:Power3.easeIn, display:"inline-block"}, "-=.5");
                        
                        tl.from($("#standby img"), 1, {ease:Power3.easeIn, y:"250"}, "-=.5");
                        
                        tl.to($("#standby img"), 1, {ease:Power3.easeIn, display:"inline-block"}, "-=.5");
                        
                        tl.from($("#not-connected img"), 1, {ease:Power3.easeIn, y:"250"}, "-=.5");
                        
                        tl.to($("#not-connected img"), 1, {ease:Power3.easeIn, display:"inline-block"}, "-=.5");

                    }
                    tl.play();

                    scope.$apply();
                });
            };
        })
    
    
        /**********************************************************************
        * Start the Be Informed annimation when it comes into view
        ***********************************************************************/
        .directive("securityAnnimation", function ($window) {
            return function(scope, element, attrs) {
                angular.element($window).bind("scroll", function() {

                    var tl = new TimelineLite();

                    var screenHeight = $(window).height();
                    var annimationBottom = element[0].getBoundingClientRect().bottom;
                    if(annimationBottom < screenHeight-100 && scope.securityAnnimationRan == false) {
                        scope.securityAnnimationRan = true;
                        
                        tl.to($("#green-line-imgs #1"), .2, {ease:Power3.easeIn, display:"inline-block"});
                        
                        tl.to($("#green-line-imgs #2"), .2, {ease:Power3.easeIn, display:"inline-block"}, "-=.1");
                        
                        tl.to($("#green-line-imgs #3"), .2, {ease:Power3.easeIn, display:"inline-block"}, "-=.1");
                        
                        tl.to($("#green-line-imgs #4"), .2, {ease:Power3.easeIn, display:"inline-block"}, "-=.1");
                        
                        tl.to($("#green-line-imgs #5"), .2, {ease:Power3.easeIn, display:"inline-block"}, "-=.1");
                        
                        tl.to($("#green-line-imgs #6"), .2, {ease:Power3.easeIn, display:"inline-block"}, "-=.1");
                        
                        tl.to($("#green-line-imgs #7"), .2, {ease:Power3.easeIn, display:"inline-block"}, "-=.1");
                        
                        tl.to($("#green-line-imgs #8"), .2, {ease:Power3.easeIn, display:"inline-block"}, "-=.1");
                        
                        tl.to($("#vital"), .2, {ease:Power3.easeIn, y:"-100", display:"inline-block"}, "-=.1");
                        
                        tl.to($("#red-line-imgs #1"), .2, {ease:Power3.easeIn, display:"inline-block"});
                        
                        tl.to($("#red-line-imgs #2"), .2, {ease:Power3.easeIn, display:"inline-block"}, "-=.1");
                        
                        tl.to($("#red-line-imgs #1"), .2, {ease:Power3.easeIn, display:"none"}, "-=.2");
                        
                        tl.to($("#red-line-imgs #3"), .2, {ease:Power3.easeIn, display:"inline-block"}, "-=.1");
                        
                        tl.to($("#red-line-imgs #2"), .2, {ease:Power3.easeIn, display:"none"}, "-=.2");
                        
                        tl.to($("#red-line-imgs #4"), .2, {ease:Power3.easeIn, display:"inline-block"}, "-=.1");
                        
                        tl.to($("#red-line-imgs #3"), .2, {ease:Power3.easeIn, display:"none"}, "-=.2");
                        
                        tl.to("#dotted-lines-2", .2, {ease:Power3.easeIn, display:"inherit"}, "+=.2");
                        tl.to("#dotted-lines-3", .2, {ease:Power3.easeIn, display:"inherit"}, "+=.1");
                        tl.to("#dotted-lines-4", .2, {ease:Power3.easeIn, display:"inherit"}, "+=.1");
                        tl.to("#dotted-lines-5", .1, {ease:Power3.easeIn, display:"inherit"}, "+=.05");
                        tl.to("#dotted-lines-6", .1, {ease:Power3.easeIn, display:"inherit"}, "+=.05");
                        tl.to("#dotted-lines-7", .05, {ease:Power3.easeIn, display:"inherit"}, "+=.05");
                        tl.to("#dotted-lines-8", .05, {ease:Power3.easeIn, display:"inherit"}, "+=.05");
                        tl.to("#dotted-lines-9", .05, {ease:Power3.easeIn, display:"inherit"}, "+=.05");
                        tl.to("#app-icons", .1, {ease:Power3.easeIn, display:"inherit"}, "+=.05");
                        

                    }
                    tl.play();

                    scope.$apply();
                });
            };
        })
    
    
        /**********************************************************************
        * Start the Be Informed annimation when it comes into view
        ***********************************************************************/
        .directive("productiveAnnimation", function ($window) {
            return function(scope, element, attrs) {
                angular.element($window).bind("scroll", function() {

                    var tl = new TimelineLite();

                    var screenHeight = $(window).height();
                    var annimationBottom = element[0].getBoundingClientRect().bottom;
                    if(annimationBottom < screenHeight-500 && scope.productiveAnnimationRan == false) {
                        scope.productiveAnnimationRan = true;
                        
                        tl.to($("#no-token"), .2, {ease:Power3.easeIn, display:"inline-block"});
                        
                        tl.to($("#no-input"), .2, {ease:Power3.easeIn, display:"inline-block"}, "+=.5");
                        
                       

                    }
                    tl.play();

                    scope.$apply();
                });
            };
        })
    
        ;
}());



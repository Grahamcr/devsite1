
(function () {
    'use strict';

    angular.module('myapps')
    
    
    
    
       /***************************************************************************************
        * Use Greensock to hide/show the global navigation menu
        ****************************************************************************************/ 
        .directive("toggleGlobalMenu", function(){
            return function(scope, element, attrs){
                element.bind("click", function(){

                    //create a TimelineLite instance
                    var tl = new TimelineLite();

                    //Check Visibility and toggle
                    if($('#header-menu').is(":visible")){
                        
                        tl.to("#header-menu", 1, {ease:Power3.easeOut, height:"0px"});
                        tl.to("#header-menu", .1, {ease:Power3.easeOut, display:"none"}, "-=.8");

                    }else {
                        tl.to("#header-menu", 1, {ease:Power3.easeIn, display:"inherit"});
                        tl.to("#header-menu", 2, {ease:Power3.easeIn, height:"auto"}, "-=1.8");
                    }
                    tl.play();

                });
            };
        })
    
        /***************************************************************************************
        * Redirect the user to the homepage
        ****************************************************************************************/ 
        .directive("redirectHome", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){
                    
                    window.open("#/","_self");

                    
                });
            };
        }])
    
        /***************************************************************************************
        * Redirect the user to the Get Started Page
        ****************************************************************************************/ 
        .directive("redirectGetStarted", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){
                    
                    window.open("#/getStarted","_self");

                    
                });
            };
        }])
    
        /***************************************************************************************
        * Redirect the user to the Get Started Page
        ****************************************************************************************/ 
        .directive("redirectContact", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){
                    
                    window.open("#/contact","_self");

                    
                });
            };
        }])
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
       
    
    
        ;
}());



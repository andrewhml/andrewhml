/*
|--------------------------------------------------------------------------
| DOCUMENT READY
|--------------------------------------------------------------------------
*/  

$(document).ready(function() {
    "use strict";

    /*
    |--------------------------------------------------------------------------
    |  fullwidth image
    |--------------------------------------------------------------------------
    */


    if ($('#homeFullScreen').length)
    {
        fullscreenImage();
    }
    //alert($('#mainHeader').height());
    //alert( $(window).height());
    var $starter = $(window).height()-($('#mainHeader').height());
    $(window).scroll(function() {

     if ($('#fullScreen').length)
     {

    
        if ($(window).scrollTop()>= $starter){
           $('#mainHeader').slideDown();
       } else if ($(window).scrollTop()==0){
           $('#mainHeader').slideUp();
       } 
   }

     });
  });

/** FULLSCREEN IMAGE **/

function fullscreenImage(){
          $('#homeFullScreen').css({height:$(window).height()})   
}

$(window).on("resize",function(e){

       if ($('#homeFullScreen').length)
            {
                console.log("working!")
                fullscreenImage();
            }
    
});

// Transition the header to sticky class when you reach about section //

$(function () {
    $("#about").waypoint(function () {
        $("#main-nav").toggleClass("sticky")
    }, {
        offset: 160
    })
});

// This function is supposed to shrink the size of the nav when you reach a certain point of the page //

$(function(){
    $('#main_nav').data('size','big');
});

$(window).scroll(function(){
    var $nav = $('#main_nav');
    if ($('body').scrollTop() > 0) {
        if ($nav.data('size') == 'big') {
            $nav.data('size','small').stop().animate({
                height:'40px'
            }, 600);
        }
    } else {
        if ($nav.data('size') == 'small') {
            $nav.data('size','big').stop().animate({
                height:'100px'
            }, 600);
        }  
    }
});
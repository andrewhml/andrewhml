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

$(function () {
    $("#about").waypoint(function () {
        $("#main-nav").toggleClass("sticky")
    }, {
        offset: 160
    })
});
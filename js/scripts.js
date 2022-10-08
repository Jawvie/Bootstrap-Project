// JQUERY FUNCTION BELOW FOR PLAY/PAUSE CAROUSEL

$(function() {
    $(".carousel").carousel( { interval: 2000 } );                          //INTERVAL/TIMER
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {      //checking if pause button
            $(".carousel").carousel("pause");                               //pause command?
            $("#carouselButton").children("i").removeClass("fa-pause");     //removing font awesome pause
            $("#carouselButton").children("i").addClass("fa-play");         //adding fron awesome play
        } else {
            $(".carousel").carousel("cycle");                               //else it is a play button start "cycle"
            $("#carouselButton").children("i").removeClass("fa-play");      //remove fa play add pause
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });

    //RESERVE MODAL
    $("#reserveButton").click(function(){
        $("#reserveModal").modal("show");
    });

    //LOGIN MODAL
    $("#loginButton").click(function(){
        $("#loginModal").modal("show");
    });

});




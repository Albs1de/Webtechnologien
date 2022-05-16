'use strict';




$("#startButton1").click(function() {
    $("#moviePlay").slideUp();


});

function startMovie() {
    let playVideo = document.getElementById("moviePlay");
    playVideo.hidden = false;
    playVideo.play();
   
};

function stopMovie() {
    let playVideo = document.getElementById("moviePlay");
    playVideo.pause();
};
function test() {
    alert(1);
    $("#moviePlay").get(0).play();
};
$(document).ready(function(){

   $("#five").on("click", function() {
    $("#five-hotel").fadeIn(500);
    $("#four-hotel").fadeOut(500);
    $("#three-hotel").fadeOut(500);
    $("#two-hotel").fadeOut(500);
    $("#one-hotel").fadeOut(500);
    return;
  });

   $("#four").on("click", function() {
    $("#five-hotel").fadeOut(500);
    $("#four-hotel").fadeIn(500);
    $("#three-hotel").fadeOut(500);
    $("#two-hotel").fadeOut(500);
    $("#one-hotel").fadeOut(500);
    return;
  });

   $("#three").on("click", function() {
    $("#five-hotel").fadeOut(500);
    $("#four-hotel").fadeOut(500);
    $("#three-hotel").fadeIn(500);
    $("#two-hotel").fadeOut(500);
    $("#one-hotel").fadeOut(500);
    return;
  });

   $("#two").on("click", function() {
    $("#five-hotel").fadeOut(500);
    $("#four-hotel").fadeOut(500);
    $("#three-hotel").fadeOut(500);
    $("#two-hotel").fadeIn(500);
    $("#one-hotel").fadeOut(500);
    return;
  });

   $("#one").on("click", function() {
    $("#five-hotel").fadeOut(500);
    $("#four-hotel").fadeOut(500);
    $("#three-hotel").fadeOut(500);
    $("#two-hotel").fadeOut(500);
    $("#one-hotel").fadeIn(500);
    return;
  });


});
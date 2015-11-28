$(document).ready(function(){

  
  //Body panels hide
  $(".hotel-search").hide();


  //Destination Name Search
  $(".btn-default").on("click", function(e){
    e.preventDefault();

    var location = $("#location").val().trim();

    // Name of destination appears
    var destinationLocation = $(".hotel-location");
    destinationLocation.replaceWith($("<span>").append(location));

    $(".hotel-search").fadeIn(500);

  });
  
});
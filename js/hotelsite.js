
$(document).ready(function(){

  
  //Body panels hide
  $(".hotel-search").hide();

  //AlertDanger hide
  $(".alert-danger").hide();

  //Destination Name Search
  $(".btn-default").on("click", function(e){
    e.preventDefault();
    var city = $("#location").val().trim();
    var checkIn = $("#checkin").val().trim();
    var checkOut = $("#checkout").val().trim();
    if (city === "" || checkIn === "" || checkOut === ""){
      $(".alert-danger").slideDown(500);
      return;
    };
    

    var location = $("#location").val().trim();

   

    // Name of destination appears
    var destinationLocation = $(".hotel-location");
    destinationLocation.replaceWith($("<span>").append(location));

    $(".hotel-search").fadeIn(500);

  });

  //Clearing alert
  $("#location").on("click keydown mouseover", function() {
    $(".alert-danger").fadeOut();
  });
  $("#checkin").on("mouseover", function() {
    $(".alert-danger").fadeOut();
  });
  $("#checkout").on("mouseover", function() {
    $(".alert-danger").fadeOut();
  });

});

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
    
    // Name of destination appears
    var location = $("#location").val().trim();

    var destinationLocation = $(".hotel-location");
    destinationLocation.replaceWith($("<span>").addClass("hotel-location").append(location));
    destinationLocation.append(location);

    $(".hotel-search").fadeIn(500);

    $("#location").val("").focus();

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
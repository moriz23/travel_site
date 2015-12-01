
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

  /////------------Added by Chinmay for Advance Search ------------
  //Advance search option

  $("#citySubmit").on ("click",function(e){
    e.preventDefault(); // Without prevent default on submit button, Modal was not launched

    var cityInput;
    cityInput = $("#cityInput").val();

    if (cityInput === "") { 
        alert("Please enter city to search");
    } //In the navbar, if the city is blank then show alert; else copy city to Modal
    else {
        $("#modalCity").val(cityInput); 
        $("#modalCheckIn").val("");
        $("#modalCheckOut").val("");
        $("#buttondropdownMenu1").val("");
        $("#buttondropdownMenu2").val("");
        $("#buttondropdownMenu3").val("");
    }
  });

  //Search from Modal 
  $("#modalSearch").on("click", function(e){
    e.preventDefault();

    var modalCity, modalCheckIn, modalCheckOut,validationCheck=0;

    modalCity = $("#modalCity").val();
    modalCheckIn = $("#modalCheckIn").val();
    modalCheckOut = $("#modalCheckOut").val();

    $("#modalFooterMessage").text(""); //Initializes previous alert messages

    //console.log("Ourtside IF : city search :"+modalCity+"chekin :"+modalCheckIn+"Check Out"+modalCheckOut);

    if (modalCity==="" || modalCheckIn==="" ||modalCheckOut==="") {
        $("#modalFooterMessage").text("Some mandatory values are empty !! Please enter and search again.").css("color","red");
        $("#modalFooterMessage").fadeOut(5000);
        validationCheck=1; 
    }

    if (modalCheckIn > modalCheckOut) {
        //console.log("Inside IF :city search :"+modalCity+"chekin :"+modalCheckIn+"Check Out"+modalCheckOut);
        //debugger;
      $("#modalFooterMessage").text("Check out date is earlier than the Check In date. Please correct the dates!!.").css("color","red");
      $("#modalCheckIn").val("");
      $("#modalCheckOut").val("");
      validationCheck=1; 
    } // Need to fix this, sometimes it does not work 

    if (validationCheck === 0) {
     $(".hotel-search").fadeIn(500);
     $("#myModal").modal("hide");
    }

  }); //Modal search Ends 

  $('.datepicker').pickadate(); //Date picker used in checkin and checkout dates

  $(".dropdown-menu li a").click(function(){
    var selText = $(this).text();
    //console.log("Inside dropdown click"+selText);
    //debugger;
    $(this).parent().parent().siblings().html(selText+' <span class="caret"></span>');
    //$(this).parents('.btn-default').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
  }); //Change text in the drop down 

  ///////End section for Advance Search - Updated by Chinmay---------
});
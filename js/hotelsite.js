$(document).ready (function (){
  $(".alerts").hide();

  $('.datepicker').pickadate(); //Date picker used in checkin and checkout dates

  $("#citySubmit").on ("click",function(e){
    e.preventDefault(); // Without prevent default on submit button, Modal was not launched

    var cityInput;

    cityInput = $("#cityInput").val();

    console.log ("The city search value is :" +cityInput);

    if (cityInput === "") { 
        alert("Please enter city to search");
    } //In the navbar, if the city is blank then show alert; else copy city to Modal
    else {
        //console.log ("The city search value is :" +cityInput);
        //debugger;
        $("#modalCity").val(cityInput); //It is not working now, please comeback and fix this
    }

  }); //End of City Submit funtion on nav bar, which calls the Modal to get input

  $("#modalSearch").on("click", function(e){
    e.preventDefault();

    var modalCity, modalCheckIn, modalCheckOut;

    modalCity = $("#modalCity").val();
    modalCheckIn = $("#modalCheckIn").val();
    modalCheckOut = $("#modalCheckOut").val();

    //console.log("Ourtside IF : city search :"+modalCity+"chekin :"+modalCheckIn+"Check Out"+modalCheckOut);

    if (modalCity==="" || modalCheckIn==="" ||modalCheckOut==="") {
        //console.log("Inside IF :city search :"+modalCity+"chekin :"+modalCheckIn+"Check Out"+modalCheckOut);
        //debugger;
        $("#modalFooterMessage").text("Some mandatory values are empty !! Please enter and search again.").css("color","red");
    }

  }); //Search from Modal search 

});


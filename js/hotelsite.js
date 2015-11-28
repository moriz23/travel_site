//alert ("Hi java script file is linked");
$(document).ready (function (){
  $(".alerts").hide();

  $("#citySubmit").on ("click",function(e){
    e.preventDefault(); // Without prevent default on submit button, Modal was not launched

  }); //End of City Submit funtion, which calls the Modal to get input

});

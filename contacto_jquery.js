$(document).ready(function(){
  $("#toggleFormReclamo").on('click',function(){
    $("#toggleFormContacto").removeClass("disabled");
    $("#toggleFormReclamo").addClass("disabled");
    $("#FormContacto").animate({opacity:"0",top:"60%"},function(){
      $("#FormContacto").toggle();
      $("#FormReclamo").toggle();
      $("#FormReclamo").animate({opacity:"1",top:"40%"})
    }) 
  })
  $("#toggleFormContacto").on('click',function(){
    $("#toggleFormReclamo").removeClass("disabled");
    $("#toggleFormContacto").addClass("disabled");
    $("#FormReclamo").animate({opacity:"0",top:"60%"},function(){
      $("#FormReclamo").toggle();
      $("#FormContacto").toggle();
      $("#FormContacto").animate({opacity:"1",top:"40%"})
    }) 
  })
})
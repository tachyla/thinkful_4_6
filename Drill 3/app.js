//Declare the bulbFunction outside of the on method
function bulbFunction(){
  $(".lightbulb").removeClass("bulb-on");
  $(this).addClass("bulb-on");
}
$(".lightbulb").on("click",bulbFunction);

/*
//Declare an anonymous function inside the on method
$(".lightbulb").on("click",function(event){
  $(".lightbulb").removeClass("bulb-on");
  $(this).addClass("bulb-on");
});
*/

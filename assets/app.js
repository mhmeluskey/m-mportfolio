//what page looks like on load
$(document).ready(function () {
   
        console.log("hello world")

$("#button").on("click", function () {
    $("#para").toggle('<img id = "mypic" class="responsive" src="images/profilepol.png" alt="mypic" height="40%" width="80%"></img>')
});

 //for later use when portfolio is expanded upon  
$("#contact").on("click", function () {
    console.log("hello world");
    $("#accordion").toggle("slow");
  
    
   
    
});







});

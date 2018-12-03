//what page looks like on load
$(document).ready(function() {
  console.log("hello world");

  $(".app-pic")
    .delay(1000)
    .fadeIn(2000);

  $("button")
    .delay(1000)
    .fadeIn(2000);
  $("#myname")
    .delay(500)
    .fadeIn(2000);
});

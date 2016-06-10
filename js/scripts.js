// $(document).ready(function(){
//   event.preventDefault();
// }
var answer = "";

$("#play").click(function() {
  var inputNumber = parseInt($("#myNumber").val());
  for (i=1; i<=inputNumber; i++) {
    if (i%15===0) {
      answer = "ping-pong";
    } else if (i%5===0) {
      answer = "pong";
    } else if (i%3===0) {
      answer = "ping";
    } else {
      answer = i;
    }
    $("#pingpong").append("<li>" + answer + "</li>");
    // $("#outcomepingpong").show();
  }
});

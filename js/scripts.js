var answer = "";

$("#play").click(function(event) {
  event.preventDefault();
  // $("ul#pingpong" li).remove();
  var inputNumber = parseInt($("#yourNumber").val());
  for (i=1; i<=inputNumber; i++)
  {
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
  }
});

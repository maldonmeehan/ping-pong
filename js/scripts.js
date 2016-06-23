// business logic
var pingPong = function pingPong(inputNumber){
  var answer = [];
  for (i=1; i<=inputNumber; i++){
    if (i%15===0) {
      answer.push ("ping-pong");
    } else if (i%5===0) {
      answer.push ("pong");
    } else if (i%3===0) {
      answer.push ("ping");
    } else {
      answer.push (i);
    }
  };
  return answer;
};

// front end logic
$(document).ready(function() {
  $("#play").click(function(event) {
    event.preventDefault();
    $(".output-answer li").remove();
    var inputNumber = parseInt($("input#input-number").val());
    var pongResults = pingPong(inputNumber);
    pongAnswer.forEach(function(answer) {
      $(".output-answer").append("<li>" + answer + "</li>");
      });
    $("#answer").show();
  });
});


  // $("ul#pingpong" li).remove();

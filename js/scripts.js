// business logic
function pingPong(inputNumber) {
  var answers = [];
  for (i=1; i<=inputNumber; i++) {
    if (i%15===0) {
      answers.push ("ping-pong");
    } else if (i%5===0) {
      answers.push ("pong");
    } else if (i%3===0) {
      answers.push ("ping");
    } else {
      answers.push(i);
    }
  };
  return answers;
};

// front end logic
$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    $("ul.output-answer li").remove();

    var inputNumber = parseInt($("#yourNumber").val());
    var pingPongResults = pingPong(inputNumber);
    console.log(pingPongResults);

    pingPongResults.forEach(function(result) {
      $(".output-answer").append("<li>" + result + "</li>");
      });
    $("#answer").show();
  });
});

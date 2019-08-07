console.log("Am I working?");

var counter = 0;
var randomNumber;
var wins;
var losses;
var targetNumber;


$("#number-to-guess").text(targetNumber);

$(".img-responsive").on("click", function() {
    counter += 1;
    console.log(counter);
  });



for(var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 12);
    console.log(random);
}

if (counter === targetNumber) {
    wins++
}

if (counter > targetNumber) {
    losses++
}

































console.log("Am I working?");

var winsSelector = document.getElementById('wins');
var lossSelector = document.getElementById('losses');


var counter = 0;
var randomNumber;
var wins;
var losses;
var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

console.log(targetNumber);

$("#numberToGuess").text(targetNumber);
// $("#number-to-guess").text(targetNumber);

$(".img-responsive").on("click", function() {
    counter += 1;
    console.log(counter);
  });

var fruits = ["apple", "banana", "berry", "melon",]

for(var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 12);
    console.log(random);
    var fruits = $("<div>");
    fruits.addClass("fruits");
    fruits.attr({
    "data-fruit-value":  random
});
    $(".fruits").append(fruits);
    console.log(fruits);
}

$(".fruits").on("click", function() {
    var fruitValue = ($(this).attr("data-fruit-value"));
    fruitValue = parseInt(fruitValue);
    counter += fruitValue;

    if (counter === targetNumber) {
    wins++;
    winsSelector.innerText = +1;
}

if (counter > targetNumber) {
    losses++;
    lossSelector.innerText = +1;
}

});

































console.log("Am I working?");



var score = 0;
// var randomNumber;
var wins = 0;
var losses = 0;
var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
console.log(targetNumber);

// var reset = function () {

$("#numberToGuess").text(targetNumber);




var fruitOptions = ["apple", "banana", "berry", "melon"]

for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;
    console.log(random);

    var fruit = $("#" + fruitOptions[i]);
    fruit.addClass("fruitsRow");
    fruit.attr("data-fruit-val", random);
    $(".fruitsRow").append(fruit);
}

$(".fruits").on('click', function () {
    // console.log($('.fruits'));
    var fruitValue = ($(this).attr('data-fruit-val'));
    fruitValue = parseInt(fruitValue);
    score += fruitValue;
    $("#score").html(score);
    console.log(fruitValue);

    if (score > targetNumber) {
        console.log("fail");
        losses++;
        $("#losses").html(losses);
        $("#score").html(score = 0);
        resetTarget();
    }


    if (score === targetNumber) {
        console.log("win");
        wins++;
        $("#wins").html(wins);
        $("#score").html(score = 0);
        resetTarget();
    }



});

function resetTarget () {
    targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#numberToGuess").text(targetNumber);
}


































function newFunction() {
    $(targetNumber).html("#numberToGuess");
}


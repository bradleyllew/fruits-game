console.log("Am I working?");

// var winsSelector = document.getElementById('wins');
// var lossSelector = document.getElementById('losses');


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

        var apple = $("#apple");
        apple.addClass("fruitsRow");
        apple.attr("data-fruit-val", random);
        // apple.attr({"fruitsRow": 'data-fruit-val', "data-random": random});
        $(".fruitsRow").append(apple);
        
        var banana = $("#banana");
        banana.addClass("fruitsRow");
        banana.attr("data-fruit-val", random);
        // apple.attr({"fruitsRow": 'data-fruit-val', "data-random": random});
        $(".fruitsRow").append(banana);

        var berry = $("#berry");
        berry.addClass("fruitsRow");
        berry.attr("data-fruit-val", random);
        // apple.attr({"fruitsRow": 'data-fruit-val', "data-random": random});
        $(".fruitsRow").append(berry);

        var melon = $("#melon");
        melon.addClass("fruitsRow");
        melon.attr("data-fruit-val", random);
        // apple.attr({"fruitsRow": 'data-fruit-val', "data-random": random});
        $(".fruitsRow").append(melon);
        
        
        
        
        
        
        // var imageFruit = $("<div>");

        // imageFruit.addClass("fruit-image");

        // imageFruit.attr("src", "assets/images/apple.jpg");
        // // imageFruit.attr("data-fruit-val", random);
        // imageFruit.attr({ "#apple": 'fruit', "data-random": random});
        // $(".fruit-image").append(imageFruit);
        
        // var appleBtn = $("<img>");
        // appleBtn.addClass("imageFruit");
        // appleBtn.attr("src", "/assets/images/apple.jpg");
        // appleBtn.attr("data-random");
        

        // var random = Math.floor(Math.random() * 11) + 1;
        // console.log(random);

        // var fruits = $("<div>");
        // fruits.addClass("fruits-row");
        // fruits.attr({
        //     "data-fruit-value": random
        // });
        // $("fruits-row").append(fruits);
        // console.log(fruits);
    }
// }

$(".fruits").on('click', function () {
    // console.log($('.fruits'));
    var fruitValue = ($(this).attr('data-fruit-val'));
    fruitValue = parseInt(fruitValue);
    score += fruitValue;
    console.log(fruitValue);


    if (score === targetNumber) {
        console.log("win");
        wins++;
        $("#wins").html(wins);
        // reset();
    }

    if (score > targetNumber) {
        console.log("fail");
        losses++;
        $("losses").html(losses);
        // reset();
    }

});

// $(".img-responsive").on("click", function () {
//     // score += 1;
//     console.log(score);
//     $("score").html(score);

































var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

// Mini function section
function nextSequence() {
    return Math.floor(Math.random() * 4);
}
function checkAnser(currentLevel) {
    if (gamePattern[currentLevel] != userClickedPattern[currentLevel])
        return false
    return true;
}
function startOver() {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
}
function animatePressed(userChosenColour) {
    $("#" + userChosenColour).addClass("pressed");
    setTimeout(function () {
        $("#" + userChosenColour).removeClass("pressed");
    }, 100);
}
function animateGameOver() {
    var wrongSound = new Audio("sounds/wrong.mp3");
    wrongSound.play();

    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 100);
}
// Gameplay section

// Function for keypress action
$(document).keypress(function () { 
    level++;
    $("h1").text("Level " + level);

    var randomNumber = nextSequence();
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(80).fadeIn(80).fadeOut(80).fadeIn(80);
    var gameAudio = new Audio("sounds/" + randomChosenColour + ".mp3");
    gameAudio.play();
});

// Function for click action
$(".btn").click(function (event) {

    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);

    animatePressed(userChosenColour);

    var audio = new Audio("sounds/" + userChosenColour + ".mp3");
    audio.play();

    if (!checkAnser(userClickedPattern.length - 1)) {
        $("h1").text("Game Over, Press Any Key to Restart");

        animateGameOver();
        
        startOver();
    }
    else if (userClickedPattern.length == level) {
        userClickedPattern = [];
        var e = jQuery.Event("keypress");
        setTimeout(function () {
            $(document).trigger(e);
        }, 800);

    }
});


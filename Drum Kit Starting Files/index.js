var buttonArray = document.querySelectorAll(".drum");
var length = buttonArray.length;


for (var i = 0; i < length; i++) {
    buttonArray[i].addEventListener("click", function () {
        var signalSign = this.innerHTML;
        signalCheck(signalSign);
        buttonAnimation(signalSign);
    });
}

document.addEventListener("keydown", function(event){
    signalCheck(event.key);
    buttonAnimation(event.key);
});

// Check keypress and button pressed

function signalCheck(signalSign) {
    switch (signalSign) {
        case "w":
            var drumSounds = new Audio("sounds/crash.mp3");
            drumSounds.play();
            break;
        case "a":
            var drumSounds = new Audio("sounds/kick-bass.mp3");
            drumSounds.play();
            break;
        case "s":
            var drumSounds = new Audio("sounds/snare.mp3");
            drumSounds.play();
            break;
        case "d":
            var drumSounds = new Audio("sounds/tom-1.mp3");
            drumSounds.play();
            break;
        case "j":
            var drumSounds = new Audio("sounds/tom-2.mp3");
            drumSounds.play();
            break;
        case "k":
            var drumSounds = new Audio("sounds/tom-3.mp3");
            drumSounds.play();
            break;
        case "l":
            var drumSounds = new Audio("sounds/tom-4.mp3");
            drumSounds.play();
            break;
        default:
            console.log(sygnalSign);
    }
}

// Add animation when triggered

function buttonAnimation(buttonPressed) {
    var animationButton = document.querySelector("." + buttonPressed);
    animationButton.classList.add("pressed");
    setTimeout(function () {
        animationButton.classList.remove("pressed");
    }, 100);
}
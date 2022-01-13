var totalDrums = document.querySelectorAll(".drum").length;
// alert(totalDrums);
for (var i = 0; i < totalDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonPressed = this.innerHTML;
        // alert(buttonPressed);
        playDrum(buttonPressed);
    });
}
document.addEventListener("keydown", function (event) {
    playDrum(event.key);
});

function playDrum(key) {
    switch (key) {
        case "a":
            var audio = new Audio("cymbal.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("kick-bass.mp3");
            audio.play();
            break;
        case "f":
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("tom-4.mp3");
            audio.play();
            break;
        default:
            var audio = new Audio("kick-bass.mp3");
            audio.play();
            break;
    }
}
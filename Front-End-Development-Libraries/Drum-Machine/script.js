const drumPads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

drumPads.forEach((pad) => {
	pad.addEventListener("click", () => playSound(pad));
});

document.addEventListener("keydown", (e) => {
	const keyPressed = e.code === "KeyA" ? "A" : e.key.toUpperCase();
	const pad = document.getElementById(keyPressed + "-sound");
	if (pad) playSound(pad);
});

function playSound(pad) {
	const audio = pad.querySelector(".clip");
	if (audio) {
		audio.currentTime = 0;
		audio.play();
		display.innerText = pad.id.substring(0, 1); // Get the first character of the ID
	}
}

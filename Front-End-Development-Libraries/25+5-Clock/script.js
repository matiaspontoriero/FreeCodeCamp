document.addEventListener("DOMContentLoaded", function () {
	const breakDecrement = document.getElementById("break-decrement");
	const breakIncrement = document.getElementById("break-increment");
	const sessionDecrement = document.getElementById("session-decrement");
	const sessionIncrement = document.getElementById("session-increment");
	const startStop = document.getElementById("start_stop");
	const reset = document.getElementById("reset");
	const breakLengthElement = document.getElementById("break-length");
	const sessionLengthElement = document.getElementById("session-length");
	const timerLabel = document.getElementById("timer-label");
	const timeLeftElement = document.getElementById("time-left");
	const beep = document.getElementById("beep");

	let breakLength = 5;
	let sessionLength = 25;
	let timer;
	let timeLeft = sessionLength * 60;
	let isSession = true;
	let isRunning = false;

	breakDecrement.addEventListener("click", () => {
		if (breakLength > 1) {
			breakLength--;
			if (!isRunning && isSession) {
				timeLeft = breakLength * 60;
				timerLabel.textContent = "Break";
				updateDisplay();
			}
		}
	});

	breakIncrement.addEventListener("click", () => {
		if (breakLength < 60) {
			breakLength++;
			if (!isRunning && isSession) {
				timeLeft = breakLength * 60;
				timerLabel.textContent = "Break";
				updateDisplay();
			}
		}
	});

	sessionDecrement.addEventListener("click", () => {
		if (sessionLength > 1) {
			sessionLength--;
			if (!isRunning && isSession) {
				timeLeft = sessionLength * 60;
				timerLabel.textContent = "Session";
				updateDisplay();
			}
		}
	});

	sessionIncrement.addEventListener("click", () => {
		if (sessionLength < 60) {
			sessionLength++;
			if (!isRunning && isSession) {
				timeLeft = sessionLength * 60;
				timerLabel.textContent = "Session";
				updateDisplay();
			}
		}
	});

	startStop.addEventListener("click", () => {
		if (isRunning) {
			clearInterval(timer);
			isRunning = false;
			startStop.textContent = "Start";
		} else {
			isRunning = true;
			startStop.textContent = "Stop";
			timer = setInterval(updateTimer, 1000);
		}
	});

	reset.addEventListener("click", () => {
		clearInterval(timer);
		isRunning = false;
		isSession = true;
		breakLength = 5;
		sessionLength = 25;
		timeLeft = sessionLength * 60;
		startStop.textContent = "Start";
		updateDisplay();
		beep.pause();
		beep.currentTime = 0;
	});

	function switchSessionBreak() {
		if (isSession && timeLeft === 0) {
			timeLeft = breakLength * 60;
			isSession = false;
			timerLabel.textContent = "Break";
		}
		if (!isSession && timeLeft === 0) {
			timeLeft = sessionLength * 60;
			isSession = true;
			timerLabel.textContent = "Session";
		}
		updateDisplay();
	}

	function updateTimer() {
		if (timeLeft > 0) {
			timeLeft--;
			updateDisplay();
		} else {
			switchSessionBreak();
			beep.play();
		}
	}

	function updateDisplay() {
		let minutes = Math.floor(timeLeft / 60);
		let seconds = timeLeft % 60;
		timeLeftElement.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
			seconds < 10 ? "0" : ""
		}${seconds}`;
		if (timeLeft === 0) {
			timeLeftElement.style.color = "red";
			switchSessionBreak();
		} else {
			timeLeftElement.style.color = "black";
		}
		if (isRunning && timeLeft === 0) {
			clearInterval(timer);
		}
		if (timeLeft === 0) {
			beep.play();
		}
		if (!isRunning) {
			startStop.textContent = "Start";
		}
		breakLengthElement.textContent = breakLength;
		sessionLengthElement.textContent = sessionLength;
	}
});

const checkbtn = document.getElementById("check-btn");
const input = document.getElementById("user-input");
const clear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

checkbtn.addEventListener("click", telephoneCheck);
clear.addEventListener("click", function () {
	input.value = "";
	result.textContent = "";
});

function telephoneCheck() {
	const str = input.value;
	if (str === "") {
		alert("Please provide a phone number");
		result.textContent = "Please provide a phone number";
		return;
	}
	const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
	if (regex.test(str) === true) {
		result.textContent = "Valid US number: " + str;
	} else {
		result.textContent = "Invalid US number: " + str;
	}
}

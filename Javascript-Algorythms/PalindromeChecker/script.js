const btn = document.getElementById("check-btn");
const result = document.getElementById("result");
const input = document.getElementById("text-input");

function checkPalindrome() {
	const str = input.value;
	if (str === "") {
		result.innerHTML = "Please input a value";
		alert("Please input a value");
	} else {
		const cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
		const reversedStr = cleanStr.split("").reverse().join("");
		if (cleanStr === reversedStr) {
			result.innerHTML = str + " is a palindrome";
		} else {
			result.innerHTML = str + " is not a palindrome";
		}
	}
}

btn.addEventListener("click", checkPalindrome);

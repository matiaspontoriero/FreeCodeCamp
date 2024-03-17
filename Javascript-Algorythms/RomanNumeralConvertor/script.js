const btn = document.getElementById("convert-btn");
const result = document.getElementById("output");
const num = document.getElementById("number");
btn.addEventListener("click", function () {
	let num = document.getElementById("number").value;
	result.textContent = convertToRoman(num);
});

function convertToRoman(num) {
	const romanNumerals = [
		{ value: 1000, symbol: "M" },
		{ value: 900, symbol: "CM" },
		{ value: 500, symbol: "D" },
		{ value: 400, symbol: "CD" },
		{ value: 100, symbol: "C" },
		{ value: 90, symbol: "XC" },
		{ value: 50, symbol: "L" },
		{ value: 40, symbol: "XL" },
		{ value: 10, symbol: "X" },
		{ value: 9, symbol: "IX" },
		{ value: 5, symbol: "V" },
		{ value: 4, symbol: "IV" },
		{ value: 1, symbol: "I" },
	];
	let result = "";
	if (num === "") {
		return "Please enter a valid number";
	} else if (num > 3999) {
		return "Please enter a number less than or equal to 3999";
	} else if (num < 1) {
		return "Please enter a number greater than or equal to 1";
	}
	for (let i = 0; i < romanNumerals.length; i++) {
		while (num >= romanNumerals[i].value) {
			result += romanNumerals[i].symbol;
			num -= romanNumerals[i].value;
		}
	}
	return result;
}

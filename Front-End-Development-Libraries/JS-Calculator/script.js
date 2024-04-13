const display = document.getElementById("display");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const decimal = document.getElementById("decimal");

const regex = /[-+*/]{2,}/;
const regex2 = /[-+*/]-/;

const keyMap = {
	1: one,
	2: two,
	3: three,
	4: four,
	5: five,
	6: six,
	7: seven,
	8: eight,
	9: nine,
	0: zero,
	"=": equals,
	Enter: equals,
	c: clear,
	"+": add,
	"-": subtract,
	"*": multiply,
	"/": divide,
	".": decimal,
	Escape: clear,
};

document.addEventListener("keydown", function (event) {
	const key = event.key;
	const button = keyMap[key];
	if (button) {
		button.click();
	}
});
const buttons = [
	one,
	two,
	three,
	four,
	five,
	six,
	seven,
	eight,
	nine,
	zero,
	equals,
	clear,
	add,
	subtract,
	multiply,
	divide,
	decimal,
];
const operators = [add, subtract, multiply, divide];
const operatorsMS = [add, multiply, divide];
let currentInput = "";
let numberOperand = "";

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		if (button === zero && currentInput === "0") {
			return;
		} else if (button === decimal && numberOperand.includes(".")) {
			return;
		} else if (button === clear) {
			numberOperand = "";
			display.textContent = "0";
			currentInput = "";
			return;
		} else if (button === equals) {
			if (!currentInput.trim()) return;
			console.log(currentInput);
			display.textContent = eval(currentInput);
			solve();
			console.log(currentInput);
			return;
		}
		currentInput += button.textContent;
		numberOperand += button.textContent;
		display.textContent = numberOperand;
		if (operators.includes(button)) {
			numberOperand = "";
			if (regex.test(currentInput)) {
				if (regex2.test(currentInput)) {
					currentInput = currentInput.replace(regex2, function (match) {
						return match[0] + match[1];
					});
				} else {
					currentInput = currentInput.replace(regex, function (match) {
						return match[1];
					});
				}
			}
		}
	});
});

function solve() {
	try {
		currentInput = eval(currentInput);
	} catch (error) {
		currentInput = "Error";
	}
}

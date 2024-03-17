const purchaseBtn = document.getElementById("purchase-btn");
const price = 19.5;
document.getElementById("price").innerHTML = "Total: $" + price;
const changeDueDisplay = document.getElementById("change-due");
var change;
var arr;
var total;
var cid = [
	["PENNY", 1.01],
	["NICKEL", 2.05],
	["DIME", 3.1],
	["QUARTER", 4.25],
	["ONE", 90],
	["FIVE", 55],
	["TEN", 20],
	["TWENTY", 60],
	["ONE HUNDRED", 100],
];
const values = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
function Mayus(str) {
	str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	return str;
}
const cashRegister = (price, cash) => {
	total = 0;
	change = 0;
	arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	if (price > cash) {
		alert("Customer does not have enough money to purchase the item");
	} else if (price == cash) {
		changeDueDisplay.append("No change due - customer paid with exact cash");
	} else {
		var value = cash - price;
		changeGiven(value, cash);
	}
};

const changeGiven = (amount, cash) => {
	var totalCopy = amount;
	cid
		.slice()
		.reverse()
		.forEach((cashAmount, cashIndex) => {
			if (
				amount - values[cashIndex] >= 0 &&
				cashAmount[1] - values[cashIndex] >= 0
			) {
				console.log(cashAmount[0] + " " + amount);
				while (
					amount - values[cashIndex] >= 0 &&
					cashAmount[1] - values[cashIndex] >= 0
				) {
					cashAmount[1] = cashAmount[1] - values[cashIndex];
					cashAmount[1] = parseFloat(cashAmount[1]).toFixed(2);
					amount -= values[cashIndex];
					change += values[cashIndex];
					amount = amount.toFixed(2);
				}
				arr[cashIndex] += change;
				change = parseFloat(change).toFixed(2);
				changeDueDisplay.append(Mayus(cashAmount[0]) + ": $" + change);
				total += parseFloat(change);
				change = 0;
			}
		});
	total = total.toFixed(2);
	if (total != totalCopy) {
		changeDueDisplay.innerHTML = "Status: INSUFFICIENT_FUNDS";
		cid
			.slice()
			.reverse()
			.forEach((cashAmount, cashIndex) => {
				cashAmount[1] = cashAmount[1] + arr[cashIndex];
				cashAmount[1] = parseFloat(cashAmount[1]).toFixed(2);
			});
		return;
	}
	var space = true;
	cid.forEach((cashAmount) => {
		if (cashAmount[1] != 0) {
			space = false;
		}
	});
	if (space) {
		changeDueDisplay.append("Status: CLOSED");
	} else {
		changeDueDisplay.append("Status: OPEN");
	}
};
purchaseBtn.addEventListener("click", () => {
	const cash = document.getElementById("cash").value;
	changeDueDisplay.innerHTML = "";
	cashRegister(price, cash);
	updateChange();
});

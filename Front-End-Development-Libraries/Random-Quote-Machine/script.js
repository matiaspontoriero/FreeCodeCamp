const newQ = document
	.getElementById("new-quote")
	.addEventListener("click", newQuote);
function newQuote() {
	fetch("https://api.quotable.io/random")
		.then((response) => response.json())
		.then((data) => {
			document.getElementById("text").innerHTML = data.content;
			document.getElementById("author").innerHTML = data.author;
		});
}
newQuote();
$(document).ready(function () {
	$("#new-quote").addClass("animated bounceInDown");
	$("body").css(
		"background-color",
		"rgb(" +
			Math.floor(Math.random() * 256) +
			"," +
			Math.floor(Math.random() * 256) +
			"," +
			Math.floor(Math.random() * 256) +
			")"
	);
});

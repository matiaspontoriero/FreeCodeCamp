const d3 = require("d3");

// Define dimensions for the chart
const margin = { top: 20, right: 20, bottom: 30, left: 50 };
const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// Define scales
const x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
const y = d3.scaleLinear().rangeRound([height, 0]);

// Define the chart
const chart = d3
	.select("body")
	.append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Load the data
d3.json(
	"https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"
).then((data) => {
	x.domain(data.map((d) => d[0]));
	y.domain([0, d3.max(data, (d) => d[1])]);

	d3.select("#x-axis")
		.append("g")
		.attr("transform", "translate(0," + height + ")")
		.call(d3.axisBottom(x));

	d3.select("#y-axis")
		.append("g")
		.call(d3.axisLeft(y))
		.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", 6)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text("GDP");

	chart
		.selectAll(".bar")
		.data(data)
		.enter()
		.append("rect")
		.attr("class", "bar")
		.attr("x", (d) => x(d[0]))
		.attr("y", (d) => y(d[1]))
		.attr("height", (d) => height - y(d[1]))
		.attr("width", x.bandwidth());
});

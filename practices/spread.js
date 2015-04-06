var inputs = process.argv.splice(2);
var finsSmallest = (...values) => {
	var min = parseFloat(values[0], 10);
	for (var i = 0; i < values.length; i++) {
		min = Math.min(min, parseFloat(values[i], 10));
	}
	return min;
};
var result = finsSmallest(...inputs);
var output = `The minimum of [${inputs.toString()}] is ${result}`;
console.log(output);
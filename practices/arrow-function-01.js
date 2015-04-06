var inputs = process.argv.slice(2);
var result = inputs
			.map(value => value[0])
			.reduce((previousValue, currentValue) => (previousValue + currentValue));
var s = `[${inputs.toString()}] becomes "${result}"`;
console.log(s);
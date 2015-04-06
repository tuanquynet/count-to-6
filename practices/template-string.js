var firstname = process && process.argv[2];
var message = `Hello, ${firstname}!
Your name lowercased is "${firstname.toLowerCase()}".`;
console.log(message);

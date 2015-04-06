module.exports = function average(...args) {
	if (!args.length) {
		return 0;
	}
	return args.reduce((p,n) => (p + n))/args.length;
};
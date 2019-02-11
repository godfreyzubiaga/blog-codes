module.exports = {
	extends: 'airbnb',
	env: {
		browser: true,
		node: true,
		jest: true,
	},
	rules: {
		'no-console': 0,
		'no-alert': 0,
		'react/jsx-one-expression-per-line': 0,
		'no-underscore-dangle': 0,
		'no-tabs': 0,
		'linebreak-style': 0,
	},
	parser: 'babel-eslint',
};

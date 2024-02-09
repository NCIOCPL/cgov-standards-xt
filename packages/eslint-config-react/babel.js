module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true,
	},
	extends: [
		'./minimal',
	],
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 2016,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
};

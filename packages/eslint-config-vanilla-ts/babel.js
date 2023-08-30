module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true,
	},
	extends: [
		"@nciocpl/eslint-config-vanilla-ts/minimal",
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		 sourceType: 'module',
		 allowImportExportEverywhere: true,
		 ecmaVersion: 8,
	},
};

module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:jest/recommended",
		"plugin:jest/style",
		"plugin:jest-dom/recommended",
		"plugin:prettier/recommended",
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		 sourceType: 'module',
		 allowImportExportEverywhere: true,
		 ecmaVersion: 8,
	},
	rules: {
		"jest/consistent-test-it": ["error", { fn: "it" }],
		"jest/no-if": "error",
		"jest/no-test-return-statement": "error",
		"jest/require-to-throw-message": "error",
		"jest/require-top-level-describe": "error",
	},
};

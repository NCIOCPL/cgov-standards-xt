module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:jest/recommended",
		"plugin:jest/style",
		"plugin:jest-dom/recommended",
		"plugin:prettier/recommended",
	],
	rules: {
		"jest/consistent-test-it": ["error", { fn: "it" }],
		"jest/no-if": "error",
		"jest/no-test-return-statement": "error",
		"jest/require-to-throw-message": "error",
		"jest/require-top-level-describe": "error",
	},
};

module.exports = {
	extends: [
		"@nciocpl/eslint-config-vanilla-js/minimal",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:testing-library/react",
		// This is duplicated from vanilla-js, but that is because it
		// overrides other rules and must come last.
		"plugin:prettier/recommended",
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'react/display-name': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'testing-library/no-await-sync-events': 'error',
		'testing-library/no-manual-cleanup': 'error',
		'testing-library/no-render-in-setup': 'error',
		'testing-library/prefer-explicit-assert': 'error',
		'testing-library/prefer-wait-for': 'error',
	},
};

import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
	{ files: ["**/*.{js,mjs,cjs,jsx}"] },
	{ languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	pluginReactConfig,
	{
		settings: {
			react: {
				version: "detect",
			},
		},
	},
	{
		rules: {
			"object-curly-spacing": ["error", "always"],
			"no-console": "error",
			"no-unused-vars": "error",
			"object-curly-newline": "off",
			"no-trailing-spaces": "error",
			"no-unused-expressions": "error",
			"no-undef": "error",
			"no-var": "error",
			"no-shadow": "error",
			"arrow-spacing": "error",
			"no-underscore-dangle": "off",
			indent: ["error", "tab"],
			"linebreak-style": "off",
			quotes: ["error", "double"],
			semi: ["error", "always"],
			"comma-dangle": ["error", "always-multiline"],
			"space-before-blocks": ["error", "always"],
			"react/jsx-filename-extension": "off",
			"react/function-component-definition": "off",
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
			"react/jsx-no-constructed-context-values": "off",
			"react/jsx-props-no-spreading": "off",
			"no-promise-executor-return": "off",
			"import/no-cycle": "off",
			"key-spacing": ["error", {
				singleLine: {
					beforeColon: false,
					afterColon: true,
				},
				multiLine: {
					beforeColon: false,
					afterColon: true,
				},
			}],
		},
	},
];
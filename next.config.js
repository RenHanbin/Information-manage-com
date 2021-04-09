// const path = require('path');
// const eslintOption = require('./.eslintrc.js');
const ESLintPligin = require('eslint-webpack-plugin');

module.exports = {
	sassOptions: {
		// includePaths: [path.join(__dirname, 'styles')],
	},
	webpack: (config, _options) => {
		config.plugins.push(
			new ESLintPligin({
				emitError: true,
				extensions: [`tsx`],
				exclude: [`/node_modules/`, `.next`, `public`],
				overrideConfig: {
					parser: '@typescript-eslint/parser',
					parserOptions: {
						ecmaFeatures: {
							tsx: true,
						},
						// Allows for the parsing of modern ECMAScript features
						ecmaVersion: 2018,
						// Allows for the use of imports
						sourceType: 'module',
					},
					// plugins: ['react'], // '@typescript-eslint', 'react',
					rules: {
						// Disable prop-types as we use TypeScript for type checking
						'react/prop-types': 'off',
						'@typescript-eslint/explicit-function-return-type': 'off',
						// 'prettier/prettier': 'error',
						'@typescript-eslint/interface-name-prefix': 'off',
						'@typescript-eslint/no-explicit-any': 'off',
						'@typescript-eslint/ban-ts-ignore': 'off',
						// needed for NextJS's jsx without react import
						'react/react-in-jsx-scope': 'off',
						// array ,
						'comma-dangle': [2, 'never'],
						quotes: [2, 'single'],
						'array-bracket-spacing': [2, 'never'],
						semi: [2, 'always'],
						'no-mixed-spaces-and-tabs': [2, false], // 禁止空格和tab混用
					},
				},
			})
		);
		return config;
	},
};

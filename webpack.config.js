/* eslint-disable node/no-unsupported-features/es-syntax */
/* eslint-disable node/no-unpublished-require */
const purgecss = require('@fullhuman/postcss-purgecss')({
	content: ['./src/**/*.html', './src/**/*.ts'],
	safelist: {
		standard: [
			/(bg|text|border|ring)-(coolGray|yellow|amber|orange|red|rose|pink|fuchsia|purple|violet|indigo|blue|sky|lightBlue|cyan|teal|emerald|green|lime)-[1-9][0]?0$/,
			/(from|to)-coolGray-[1-9]00/,
			/ring-offset-(coolGray)-[18]00$/,
		],
		greedy: [/token$/],
	},
	defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = config => {
	console.log(`Using '${config.mode}' mode`);
	config.module.rules.push({
		test: /\.scss$/,
		use: [
			{
				loader: 'postcss-loader',
				options: {
					postcssOptions: {
						ident: 'postcss',
						syntax: 'postcss-scss',
						plugins: [
							require('postcss-import'),
							require('tailwindcss'),
							require('autoprefixer'),
							...(config.mode === 'production' ? [purgecss] : []),
						],
					},
				},
			},
			{
				loader: 'sass-loader',
			},
		],
	});
	return config;
};

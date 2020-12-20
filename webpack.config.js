/* eslint-disable node/no-unsupported-features/es-syntax */
/* eslint-disable node/no-unpublished-require */
const purgecss = require('@fullhuman/postcss-purgecss')({
	content: ['./src/**/*.html', './src/**/*.component.ts'],
	safelist: [/(bg|text|border|ring)-(.*)-[1-9][0]?0$/],
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

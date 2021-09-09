/* eslint-disable node/no-unsupported-features/es-syntax */
/* eslint-disable node/no-unpublished-require */

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
							...(config.mode === 'production' ? [require('autoprefixer')] : []),
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

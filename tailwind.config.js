/* eslint-disable node/no-unpublished-require */
/* eslint-disable node/no-missing-require */
// eslint-disable-next-line node/no-extraneous-require
const selectorParser = require('postcss-selector-parser');

module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: [],
	theme: {
		extend: {
			fontFamily: {
				mont: ['Montserrat', 'sans-serif'],
				fira: ['"Fira Sans"', 'Helvetica', 'sans-serif'],
				lato: ['Lato', 'Helvetica', 'sans-serif'],
			},
			fontSize: {
				'7xl': '5.25rem',
				'8xl': '6.5rem',
				'9xl': '8rem',
				'10xl': '10rem',
			},
		},
	},
	variants: {
		textColor: ['dark', 'dark-hover', 'responsive', 'hover', 'focus'],
		backgroundColor: ['dark', 'dark-hover', 'responsive', 'hover', 'focus'],
	},
	corePlugins: {
		container: false,
	},
	plugins: [
		require('@tailwindcss/typography'),
		({addComponents, theme}) => {
			addComponents({
				'.container': {
					margin: 'auto',
					padding: theme('spacing.6'),
					maxWidth: theme('maxWidth.full'),

					// Breakpoints
					'@screen sm': {
						maxWidth: theme('maxWidth.xl'),
					},
					'@screen md': {
						maxWidth: theme('maxWidth.2xl'),
					},
					'@screen lg': {
						maxWidth: theme('maxWidth.4xl'),
					},
					'@screen xl': {
						maxWidth: theme('maxWidth.6xl'),
					},
				},
			});
		},
		({addVariant, prefix}) => {
			addVariant('dark', ({modifySelectors, separator}) => {
				modifySelectors(({selector}) => {
					return selectorParser(selectors => {
						selectors.walkClasses(sel => {
							sel.value = `dark${separator}${sel.value}`;
							sel.parent.insertBefore(
								sel,
								selectorParser().astSync(prefix('.dark-theme '))
							);
						});
					}).processSync(selector);
				});
			});
		},
		({addVariant, e}) => {
			addVariant('dark-hover', ({modifySelectors, separator}) => {
				modifySelectors(({className}) => {
					return `.dark-theme .${e(
						`dark:hover${separator}${className}`
					)}:hover`;
				});
			});
		},
	],
};

/* eslint-disable node/no-unpublished-require */
/* eslint-disable node/no-missing-require */
const colors = require('tailwindcss/colors');

module.exports = {
	purge: [],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			rose: colors.rose,
			pink: colors.pink,
			fuchsia: colors.fuchsia,
			purple: colors.purple,
			violet: colors.violet,
			indigo: colors.indigo,
			blue: colors.blue,
			lightBlue: colors.lightBlue,
			cyan: colors.cyan,
			teal: colors.teal,
			emerald: colors.emerald,
			green: colors.green,
			lime: colors.lime,
			yellow: colors.yellow,
			amber: colors.amber,
			orange: colors.orange,
			red: colors.red,
			warmGray: colors.warmGray,
			trueGray: colors.trueGray,
			gray: colors.gray,
			blueGray: colors.blueGray,
			coolGray: colors.coolGray,
		},
		extend: {
			fontFamily: {
				mont: ['Montserrat', 'sans-serif'],
				fira: ['"Fira Sans"', 'Helvetica', 'sans-serif'],
				lato: ['Lato', 'Helvetica', 'sans-serif'],
			},

			colors: {
				'dark': 'var(--dark)',
				'neutral': 'var(--neutral)',
				'neutral-inverse': 'var(--neutral-inverse)',
				'primary': 'var(--primary)',
				'primary-variant': 'var(--primary-variant)',
				'default': 'var(--default)',
				'default-inverse': 'var(--default-inverse)',
				'contrast': 'var(--contrast)',
				'contrast-inverse': 'var(--contrast-inverse)',
			},
		},
	},
	variants: {
		backgroundColor: ['responsive', 'hover', 'focus', 'active'],
		borderColor: ['responsive', 'hover', 'focus', 'active'],
		textColor: ['responsive', 'hover', 'focus', 'active'],
		ringColor: ['hover', 'focus', 'active'],
		ringOpacity: ['hover', 'focus', 'active'],
		ringWidth: ['hover', 'focus', 'active'],
	},
	corePlugins: {
		container: false,
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		({addComponents, theme}) => {
			const container = {
				'.container': {
					margin: 'auto',
					maxWidth: theme('maxWidth.full'),

					// Breakpoints
					'@screen sm': {
						maxWidth: theme('maxWidth.2xl'),
					},
					'@screen md': {
						maxWidth: theme('maxWidth.3xl'),
					},
					'@screen lg': {
						maxWidth: theme('maxWidth.5xl'),
					},
					'@screen xl': {
						maxWidth: theme('maxWidth.6xl'),
					},
					'@screen 2xl': {
						maxWidth: theme('maxWidth.7xl'),
					},
				},
			};
			addComponents(container);
		},
	],
};

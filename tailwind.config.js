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
			white: colors.black,
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
			fontSize: {
				'7xl': '5.25rem',
				'8xl': '6.5rem',
				'9xl': '8rem',
				'10xl': '10rem',
			},
			colors: {
				'dark': 'var(--dark)',
				'neutral': 'var(--neutral)',
				'primary': 'var(--primary)',
				'primary-variant': 'var(--primary-variant)',
				'secondary': 'var(--secondary)',
				'default': 'var(--default)',
				'default-inverse': 'var(--default-inverse)',
				'contrast': 'var(--contrast)',
				'contrast-inverse': 'var(--contrast-inverse)',
			},
			width: {
				'72': '18rem',
				'80': '20rem',
				'96': '24rem',
			},
		},
	},
	variants: {
		textColor: ['responsive', 'hover', 'focus'],
		backgroundColor: ['responsive', 'hover', 'focus'],
		borderColor: ['responsive', 'hover', 'focus'],
		ringWidth: ['hover', 'active'],
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
			};
			addComponents(container);
		},
	],
};

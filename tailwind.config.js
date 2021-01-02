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
			flex: {
				'2': '2 2 0%',
				'3': '3 3 0%',
			},
			fontFamily: {
				mont: ['Montserrat', 'sans-serif'],
				fira: ['"Fira Sans"', 'Helvetica', 'sans-serif'],
				lato: ['Lato', 'Helvetica', 'sans-serif'],
			},
			minHeight: {
				'96': '24rem',
			},
			maxHeight: {
				'half-screen': '50vh',
			},
			zIndex: {
				'90': '90',
			},
			typography: theme => ({
				DEFAULT: {
					css: {
						color: theme('colors.gray.900'),
						a: {
							color: theme('colors.blue.500'),
							'&:hover': {
								color: theme('colors.blue.700'),
							},
							code: {color: theme('colors.blue.400')},
						},
						code: {color: theme('colors.pink.500')},
					},
				},
				dark: {
					css: {
						color: theme('colors.gray.100'),
						a: {
							color: theme('colors.blue.300'),
							'&:hover': {
								color: theme('colors.blue.400'),
							},
							code: {color: theme('colors.blue.400')},
						},
						blockquote: {
							borderLeftColor: theme('colors.gray.700'),
							color: theme('colors.gray.300'),
						},
						'h2,h3,h4': {
							color: theme('colors.gray.50'),
						},
						hr: {borderColor: theme('colors.gray.700')},
						ol: {
							li: {
								'&:before': {color: theme('colors.gray.500')},
							},
						},
						ul: {
							li: {
								'&:before': {backgroundColor: theme('colors.gray.500')},
							},
						},
						strong: {color: theme('colors.gray.300')},
						thead: {
							color: theme('colors.gray.100'),
						},
						tbody: {
							tr: {
								borderBottomColor: theme('colors.gray.700'),
							},
						},
					},
				},
			}),
		},
	},
	variants: {
		extend: {
			backgroundColor: ['hover', 'focus', 'active'],
			borderColor: ['hover', 'focus', 'active'],
			textColor: ['hover', 'focus', 'active'],
			ringColor: ['hover', 'focus', 'active'],
			ringOpacity: ['hover', 'focus', 'active'],
			ringWidth: ['hover', 'focus', 'active'],
		},
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

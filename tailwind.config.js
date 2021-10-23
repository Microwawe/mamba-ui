/* eslint-disable node/no-unpublished-require */
/* eslint-disable node/no-missing-require */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: {
		content: ['./src/**/*.{html,ts}', './safelist.txt'],
		options: {
			safelist: {
				standard: [
					/(bg|text|border|ring)-(coolGray|yellow|amber|orange|red|rose|pink|fuchsia|purple|violet|indigo|blue|sky|lightBlue|cyan|teal|emerald|green|lime)-[1-9]00$/,
					/(from|to|divide)-coolGray-[1-9]00$/,
					/(from|to)-(yellow|amber|orange|red|rose|pink|fuchsia|purple|violet|indigo|blue|sky|lightBlue|cyan|teal|emerald|green|lime)-[46]00$/,
					/ring-offset-(coolGray)-[18]00$/,
				],
				greedy: [/token$/],
			},
		},
	},
	theme: {
		container: {
			center: true,
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			// black: colors.black,
			// white: colors.white,
			rose: colors.rose,
			pink: colors.pink,
			fuchsia: colors.fuchsia,
			purple: colors.purple,
			violet: colors.violet,
			indigo: colors.indigo,
			blue: colors.blue,
			lightBlue: colors.sky, // As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`
			sky: colors.sky,
			cyan: colors.cyan,
			teal: colors.teal,
			emerald: colors.emerald,
			green: colors.green,
			lime: colors.lime,
			yellow: colors.yellow,
			amber: colors.amber,
			orange: colors.orange,
			red: colors.red,
			// warmGray: colors.warmGray,
			// trueGray: colors.trueGray,
			// gray: colors.gray,
			// blueGray: colors.blueGray,
			coolGray: colors.coolGray,
		},
		extend: {
			flex: {
				'2': '2 2 0%',
				'3': '3 3 0%',
			},
			height: {
				'112': '28rem',
				'128': '32rem',
			},
			minHeight: {
				'48': '12rem',
				'96': '24rem',
			},
			maxHeight: {
				'half-screen': '50vh',
			},
			typography: theme => ({
				DEFAULT: {
					css: {
						color: theme('colors.coolGray.700'),
						h2: {
							color: theme('colors.coolGray.800'),
						},
						h3: {
							color: theme('colors.coolGray.800'),
						},
						strong: {
							color: theme('colors.coolGray.800'),
						},
						a: {
							color: theme('colors.violet.500'),
							'&:hover': {
								color: theme('colors.violet.600'),
							},
						},
					},
				},
				dark: {
					css: {
						color: theme('colors.coolGray.400'),
						a: {color: theme('colors.coolGray.100')},
						strong: {color: theme('colors.coolGray.100')},
						h1: {color: theme('colors.coolGray.100')},
						h2: {color: theme('colors.coolGray.100')},
						h3: {color: theme('colors.coolGray.100')},
						h4: {color: theme('colors.coolGray.100')},
						code: {color: theme('colors.coolGray.100')},
						pre: {
							color: theme('colors.coolGray.200'),
							backgroundColor: theme('colors.coolGray.800'),
						},
					},
				},
			}),
		},
	},
	variants: {},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require('tailwind-safelist-generator')({
			patterns: [
				'text-{colors}',
				'hover:text-{colors}',
				'{screens}:text-{colors}',

				'bg-{colors}',
				'focus:bg-{colors}',
				'hover:bg-{colors}',
				'peer-checked:bg-{colors}',

				'border-{colors}',
				'focus:border-{colors}',
				'hover:border-{colors}',
				'{screens}:border-{colors}',

				'ring-{colors}',
				'hover:ring-{colors}',
				'focus:ring-{colors}',

				'ring-offset-coolGray-100',
				'ring-offset-coolGray-800',

				'from-coolGray-900',
				'to-coolGray-900',
			],
		}),
		({addComponents, theme}) => {
			const container = {
				'.container': {
					margin: 'auto',
					maxWidth: theme('maxWidth.full'),
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

/* eslint-disable node/no-unpublished-require */
/* eslint-disable node/no-missing-require */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,ts}', './safelist.txt'],
	safelist: {
		standard: [
			/(bg|text|border|ring|accent|divide)-(gray|yellow|amber|orange|red|rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime)-[1-9]00$/,
			/(from|to|divide)-gray-[1-9]00$/,
			/ring-offset-(gray)-[18]00$/,
		],
		greedy: [/token$/],
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
			gray: colors.gray,
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
						color: theme('colors.gray.700'),
						h2: {
							color: theme('colors.gray.800'),
						},
						h3: {
							color: theme('colors.gray.800'),
						},
						strong: {
							color: theme('colors.gray.800'),
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
						color: theme('colors.gray.400'),
						a: {color: theme('colors.gray.100')},
						strong: {color: theme('colors.gray.100')},
						h1: {color: theme('colors.gray.100')},
						h2: {color: theme('colors.gray.100')},
						h3: {color: theme('colors.gray.100')},
						h4: {color: theme('colors.gray.100')},
						code: {color: theme('colors.gray.100')},
						pre: {
							color: theme('colors.gray.200'),
							backgroundColor: theme('colors.gray.800'),
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
				'{screens}:text-{font-size}',

				'bg-{colors}',
				'focus:bg-{colors}',
				'hover:bg-{colors}',
				'peer-checked:bg-{colors}',
				'before:bg-{colors}',

				'divide-{colors}',
				'border-{colors}',
				'focus:border-{colors}',
				'hover:border-{colors}',
				'{screens}:border-{colors}',

				'accent-{colors}',
				'ring-{colors}',
				'hover:ring-{colors}',
				'focus:ring-{colors}',
				'peer-checked:ring-{colors}',

				'ring-offset-gray-100',
				'ring-offset-gray-800',

				'from-gray-900',
				'to-gray-900',

				'w-1/6',
				'w-2/6',
				'w-3/6',
				'w-4/6',
				'w-5/6',
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

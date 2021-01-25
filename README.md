[![GitHub license](https://img.shields.io/github/license/Microwawe/mamba-ui)](https://github.com/Microwawe/mamba-ui/blob/master/LICENSE.md)
[![GitHub issues](https://img.shields.io/github/issues/Microwawe/mamba-ui)](https://github.com/Microwawe/mamba-ui/issues)
[![GitHub stars](https://img.shields.io/github/stars/Microwawe/mamba-ui)](https://github.com/Microwawe/mamba-ui/stargazers)
![Twitter Follow](https://img.shields.io/twitter/follow/mamba_ui?style=social)

# Mamba UI

Mamba UI is a free, open-source collection of beautiful UI elements based on Tailwind CSS that make it easy for anyone to build a website in minutes. Take a look at the kit at [www.mambaui.com](https://mambaui.com).

All the components are just good ol' HTML and CSS, but without the need of writing complex css rules thanks to [Tailwind CSS](https://tailwindcss.com/). Tailwind CSS is a utility-first CSS
framework so if one of our components doesn't fit your needs just right, you can modify
them easily by following the their [documentation](https://tailwindcss.com/docs) documentation</a> about the different classes.

## Features

-   [x] 50+ building blocks
-   [x] Choose your primary color from any of the 17 different Tailwind colors
-   [x] Fully responsive
-   [x] Export as HTML or JSX
-   [x] Dynamic light and dark themes
-   [x] All the icons and illustrations are open-sourced as well
-   [x] Easy to customize with Tailwind CSS

## Upcoming features

If you want to know what we have planned for the near future, you can check out [our public roadmap](https://mambaui.com/docs/roadmap).

## Installation

There is no need to download or install anything from Mamba UI. Just copy-paste the components and templates to your project and they'll work out-of-the-box without any modifications as long as you have [TailwindCSS installed](https://tailwindcss.com/docs/installation) in your project.

NOTE: Tailwind doesn't have all the different colors enabled in the default configuration so here are all the possible colors mapped to their respective names.

```
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
	}
};
```

## Usage

How to use the components on your own websites?

1. Find a component, section or template that you like from the [Mamba UI website](https://mambaui.com)
2. Select the primary color from the available colors
3. Select the light or dark theme
4. View the HTML, Vue or React code for that element
5. Copy/paste the code into your project
6. Profit

## Contributing

Right now this is just a hobby project for me and there aren't a lot of users (if any) so I update and maintain the project as I have spare time.

If you want to help, pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Development

After you clone this repository to your desktop with `git clone https://github.com/Microwawe/mamba-ui.git`, go to its root directory and run `npm install` to install its dependencies.

Once the dependencies are installed, you can run `ng serve` to start the application. You will then be able to access it at `localhost:4200`

## License

[MIT](https://choosealicense.com/licenses/mit/)

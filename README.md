 [![GitHub license](https://img.shields.io/github/license/Microwawe/angular-quickstart)](https://github.com/Microwawe/angular-quickstart)


# UI Kit


An UI Kit for plain HTML and TailwindCSS components to help you get started even faster. [View the demo](https://mirkonowak.com/ui-kit).

## Features

- [x] [TailwindCSS](https://tailwindcss.com/)
- [x] [CoreUI Icons](https://icons.coreui.io/icons/)
- [x] [Montserrat font](https://fonts.google.com/specimen/Montserrat)
- [x] [Prismjs code highlighter](https://prismjs.com/)
- [x] Dynamic light and dark themes
  - [x] Selected theme saved in localstorage

## Installation

All the components and layouts that you can copy-paste to your project works out-of-the-box without any modifications as long as you have [TailwindCSS installed](https://tailwindcss.com/docs/installation) in your project.

If you want to use the same icons as I have, you'll also need [CoreUI Icons installed](https://icons.coreui.io/). If you don't want to use these then you can remove all the ``` <i> </i>``` elements and css-classes starting with `cil-` and `cib-`.  

## Usage

How to use the components on your own websites?

1. Find a component that you like from the [demo website](https://mirkonowak.com/ui-kit/home)
2. Select the primary color from the available colors
3. Select the light or dark theme
4. Click the "HTML"-button
5. Copy/paste into your project
6. Profit

## TODO

- [x] Update to TailwindCSS 2.0
  - [x] Tailwind typography plugin
  - [x] Tailwind forms plugin
- [x] Prism colors for light theme
- [ ] More complex color themes
  - [ ] Primary/secondary colors
  - [ ] Different shades
  - [ ] Warm/cold grays
- [ ] Custom color palettes
- [ ] Mobile and table views
- [ ] Components
  - [ ] Buttons
    - [ ] Basic
    - [ ] Outline
    - [ ] Text
    - [ ] Raised
    - [ ] With icon
    - [ ] With dropdown
- [ ] Sections
  - [ ] Banner
  - [x] Blog
  - [x] Call to Action
  - [ ] Contact
  - [ ] Dialog
  - [x] FAQ
  - [x] Feature
  - [x] Footer
  - [ ] Form
  - [ ] Header
  - [x] Hero
  - [ ] Gallery
  - [ ] Login
  - [ ] Menu
  - [ ] Not found 404
  - [x] Pricing
  - [ ] Settings
  - [ ] Snackbar
  - [x] Stats
  - [ ] Steps
  - [ ] Tab
  - [ ] Tag
  - [x] Team
  - [x] Testimonial
  - [x] Timeline
  - [ ] Tooltip
- [ ] Full templates
  - [ ] App landing page
  - [ ] Blog
  - [ ] Marketing
  - [ ] Portfolio
- [ ] Copy and paste components
  - [ ] Plain html + css that works out of the box
  - [ ] React components
  - [ ] Vue components



## Contributing
Right now this is just a hobby project for me and there aren't a lot of users (if any) so I update and maintain the project as I have spare time.

If you want to help, pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Development

After you clone this repository to your desktop with ```git clone https://github.com/Microwawe/ui-kit.git```, go to its root directory and run ```npm install``` to install its dependencies.

Once the dependencies are installed, you can run ``` ng serve ``` to start the application. You will then be able to access it at ```localhost:4200```

## Credits and references

Inspired by [Tailblocks](https://mertjf.github.io/tailblocks/) 

PrismJS themes:
-  Light theme: [Coy without shadows](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-coy-without-shadows.css) by [RunDevelopment](https://github.com/RunDevelopment) (based on Tim Shedor's Coy theme)
-  Dark theme: [Material Dark](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-material-dark.css) by [dutchenkoOleg](https://github.com/dutchenkoOleg) 

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Table of contents

# Contributing to Mamba UI

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

The following is a set of guidelines for contributing to Mamba UI. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

This project has pretty much been a solo project until now so if there is something missing or worded weirdly in the documentation, feel free to ask questions [in the discussions](https://github.com/Microwawe/mamba-ui/discussions) or [on Twitter @mamba_ui](https://twitter.com/mamba_ui).

## <a name="issue"></a> Found a Bug?

If you find a bug in the source code, you can help us by [submitting an issue](https://github.com/Microwawe/mamba-ui/issues). Or even better, you can [submit a pull request](#submit-pr) with a fix.

## <a name="feature"></a> Missing a Feature?

You can _request_ a new feature by [submitting an issue](#submit-issue) to our GitHub
Repository. If you would like to _implement_ a new feature, please submit an issue with a proposal for your work first, to be sure that we can use it.

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Development

Mamba UI is built mainly with Angular 13 and Tailwind CSS v2.

TODO

> NOTE: All the components and templates that the users can copy-paste to their own projects should be as "vanilla" Tailwind CSS as possible so that they don't have to add anything to the `tailwindcss.config.js` to get them to work. However, if the component uses/needs [the official Tailwind CSS -plugins](https://tailwindcss.com/docs/plugins#official-plugins) then those can be used but you'll need to also tell the users that it is required.

### Local environment

After you clone this repository to your local machine with `git clone https://github.com/Microwawe/mamba-ui.git`, go to the root directory and run `npm install` to install all of the dependencies.

Once the dependencies are installed, you can run `ng serve` to start the application in development mode (the unused Tailwind CSS classes are still in the build) or `npm run start:prod` to run the application in production mode (the unused Tailwind CSS classes are purged). You will then be able to access it at `localhost:4200`. The first build takes a minute or two, but once that is done the builds should be almost instant when you make changes.

### Colors

All the components have one primary color (which the user can choose from any of the "main" Tailwind CSS colors from the menu in the left side of the screen) and a range of grayscale colors for the other parts. The colors that can be dynamically used in the code (via for example `[ngClass]="['bg' + defaultInv, 'text' + default]"`) are:

| Color name  | Value in light mode  | Value in dark mode   |
| ----------- | -------------------- | -------------------- |
| plain       | coolGray-400         | coolGray-600         |
| plainInv    | coolGray-600         | coolGray-400         |
| neutral     | coolGray-300         | coolGray-700         |
| neutralInv  | coolGray-700         | coolGray-300         |
| default     | coolGray-100         | coolGray-800         |
| defaultInv  | coolGray-800         | coolGray-100         |
| contrast    | coolGray-50          | coolGray-900         |
| contrastInv | coolGray-900         | coolGray-50          |
| primary     | (selected color)-600 | (selected color)-400 |

In the components the colors should be used via `[ngClass]` in 99% of the cases so that they will automatically change when the user toggles dark/light mode or chooses a new primary color. Try to keep the contrast ratios accessible so that all the text is easily readable both in light and dark mode.

> Once Mamba UI starts using Tailwind CSS v3 I will most likely change the grayscale color from ´coolGray´ to ´gray´, but other than that the colors should not need to change at all unless the [official colors](https://tailwindcss.com/docs/customizing-colors#default-color-palette) change.

### Adding new components

Each category of components (`button`, `feature`, `timeline` etc) has their own module inside of `src/app/components` so that they can be lazy-loaded only when the user needs them.

Easiest way to add a new component is to use the [macro-commander](https://marketplace.visualstudio.com/items?itemName=jeff-hykin.macro-commander) extension for VS Code and the 'newComponent'-macro from `.vscode/settings.json`. It will create the necessary files with the boilerplate code for you but you can also create the files by hand.

You can run the macro in VS Code with `ctrl + shift + P` (on Windows) and then selecting `Macros: Run a macro` and choosing `newComponent`. It will show you two prompts, the first one is for the category (`src/app/components/<category>`) and the second one is for the number of the component. For example if you want to add a new button component and there already are `button1`-`button5` in `src/app/components/button` then answering `button` and `6` in the promts creates `src/app/components/button/button6` with the html and ts files.

The new component also needs to be added to the module and showcase component of that category (in this case `button.module.ts` and `button-showcase.component.ts`) in the same way as the previous ones. And since the amount of each category is also shown, you'll need to update the amount of the components in that category to match the new count (in `components.component.ts`).

### Adding new component categories

TODO

### Adding new templates

TODO

## Other

### Custom-show-code options

TODO

### Requirements

TODO

### Copy code (HTML/JSX)

TODO

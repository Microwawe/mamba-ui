import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-docs',
	templateUrl: './docs.component.html',
})
export class DocsComponent extends BaseComponent implements OnInit {
	categories = [
		{name: 'Get started', link: '/docs'},
		{name: 'General', link: 'general'},
		{name: 'Roadmap', link: 'roadmap'},
		{name: 'Credits', link: 'credits'},
	];
	selectedCategory = this.categories[0];
	code = '';
	config = `
	// tailwind.config.js
	const colors = require('tailwindcss/colors')

	module.exports = {
		theme: {
			colors: {
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
			}
		}
	}`;

	constructor() {
		super();
	}

	ngOnInit() {}
}

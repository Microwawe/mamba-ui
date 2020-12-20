import {AfterViewInit, Component, OnInit} from '@angular/core';
// eslint-disable-next-line node/no-unpublished-import
import * as Prism from 'prismjs';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-docs',
	templateUrl: './docs.component.html',
})
export class DocsComponent extends BaseComponent implements OnInit, AfterViewInit {
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

	ngAfterViewInit(): void {
		this.code = Prism.highlight(this.config, Prism.languages['js'], 'js');
	}

	ngOnInit() {}
}

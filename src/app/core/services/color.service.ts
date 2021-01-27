import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
// eslint-disable-next-line node/no-unpublished-require
const twColors: TailwindColorPalette = require('tailwindcss/colors');

import {TailwindColor, TailwindColorPalette} from '@shared/interfaces/tailwind-colors.interface';

@Injectable()
export class ColorService {
	private key = 'custom-current-color';
	private currentColor!: BehaviorSubject<TailwindColor>;
	private defaultColor: TailwindColor = {name: 'violet', shades: twColors.violet};
	allTailwindColors!: TailwindColor[];
	colors!: TailwindColor[];
	grayscale!: TailwindColor[];

	constructor() {
		this.setupColors();
	}

	setCurrentColor(currentColor: TailwindColor) {
		localStorage.setItem(this.key, currentColor.name);
		this.currentColor.next(currentColor);
	}

	getCurrentColor(): Observable<TailwindColor> {
		return this.currentColor;
	}

	getAllColors(): TailwindColor[] {
		return this.colors;
	}

	getGrayscale(): TailwindColor[] {
		return this.grayscale;
	}

	setupColors(): void {
		this.allTailwindColors = Object.getOwnPropertyNames(twColors)
			.filter(colorName => colorName !== 'black' && colorName !== 'white')
			.map(colorName => {
				const mappedColor: TailwindColor = {
					name: colorName,
					shades: twColors[colorName],
				};
				return mappedColor;
			});
		this.colors = this.allTailwindColors.filter(color => !this.isGrayscale(color));
		this.grayscale = this.allTailwindColors.filter(color => this.isGrayscale(color));

		const savedColor = localStorage.getItem(this.key);
		const color = this.colors.find(color => color.name === savedColor) || this.defaultColor;
		this.currentColor = new BehaviorSubject<TailwindColor>(color);
	}

	isGrayscale(color: TailwindColor) {
		return color.name.toLowerCase().includes('gray');
	}
}

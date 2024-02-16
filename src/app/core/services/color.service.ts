import {Injectable, afterNextRender} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import * as twColors from 'tailwindcss/colors';

import {TailwindColor, TailwindColorPalette} from '@shared/interfaces/tailwind-colors.interface';

@Injectable()
export class ColorService {
	ignoredColors = ['inherit', 'transparent', 'current', 'black', 'white', 'lightblue'];
	grayScaleColors = [
		'slate',
		'gray',
		'zinc',
		'neutral',
		'stone',
		'warmgray',
		'bluegray',
		'coolgray',
		'truegray',
	];
	private key = 'custom-current-color';
	private currentColor!: BehaviorSubject<TailwindColor>;
	private defaultColor: TailwindColor = {name: 'violet', shades: twColors.violet};
	allTailwindColors!: TailwindColor[];
	colors!: TailwindColor[];
	grayscale!: TailwindColor[];

	constructor() {
		this.setupColors();
		afterNextRender(() => {
			const savedColor = localStorage.getItem(this.key);
			const color = this.colors.find(color => color.name === savedColor) || this.defaultColor;
			this.currentColor = new BehaviorSubject<TailwindColor>(color);
		});
	}

	setCurrentColor(currentColor: TailwindColor): void {
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
			.filter(color => !this.ignoredColors.includes(color.toLowerCase()))
			.map(colorName => {
				const mappedColor: TailwindColor = {
					name: colorName,
					shades: twColors[colorName],
				};
				return mappedColor;
			});
		this.colors = this.allTailwindColors.filter(color => !this.isGrayscale(color));
		this.grayscale = this.allTailwindColors.filter(color => this.isGrayscale(color));

		this.currentColor = new BehaviorSubject<TailwindColor>(this.defaultColor);
	}

	isGrayscale(color: TailwindColor): boolean {
		return this.grayScaleColors.includes(color.name.toLowerCase());
	}
}

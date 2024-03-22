import {Injectable, afterNextRender} from '@angular/core';
import {TailwindColor} from '@shared/interfaces/tailwind-colors.interface';
import {BehaviorSubject, Observable, Subscription, combineLatest, map} from 'rxjs';
import * as twColors from 'tailwindcss/colors';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	private themeKey = 'is-custom-dark-theme';
	private isDarkTheme: BehaviorSubject<boolean>;

	private colorKey = 'custom-current-color';
	private currentColor!: BehaviorSubject<TailwindColor>;
	private defaultColor: TailwindColor = {name: 'violet', shades: twColors.violet};
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
	allTailwindColors!: TailwindColor[];
	colors!: TailwindColor[];
	grayscale!: TailwindColor[];

	currentTheme: BehaviorSubject<any> = new BehaviorSubject<any>({
		darkTheme: true,
		primary: '',
		primaryLight: '',
		primaryDark: '',
		primaryAlt: '',
		// primary50 : '',
		// primary100 : '',
		// primary200 : '',
		// primary300 : '',
		// primary400 : '',
		// primary500 : '',
		// primary600 : '',
		// primary700 : '',
		// primary800 : '',
		// primary900 : '',
		plain: '-gray-400',
		plainInv: '-gray-600',
		neutral: '-gray-700',
		neutralInv: '-gray-300',
		default: '-gray-800',
		defaultInv: '-gray-100',
		contrast: '-gray-900',
		contrastInv: '-gray-200',
		prose: 'prose',
	});

	constructor() {
		this.isDarkTheme = new BehaviorSubject<boolean>(true);
		this.setupColors();
		afterNextRender(() => {
			const useDarkTheme = localStorage.getItem(this.themeKey)
				? localStorage.getItem(this.themeKey) === 'true'
				: true;
			this.isDarkTheme = new BehaviorSubject<boolean>(useDarkTheme);
			localStorage.setItem(this.themeKey, this.isDarkTheme.value.toString());

			const savedColor = localStorage.getItem(this.colorKey);
			const color = this.colors.find(color => color.name === savedColor) || this.defaultColor;
			this.currentColor = new BehaviorSubject<TailwindColor>(color);
			this.setNewTheme(this.isDarkTheme.value, this.currentColor.value);
		});
	}

	setCurrentColor(currentColor: TailwindColor): void {
		localStorage.setItem(this.colorKey, currentColor.name);
		this.currentColor.next(currentColor);
		this.setNewTheme(this.isDarkTheme.value, this.currentColor.value);
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

	getCurrentTheme(): Observable<any> {
		return this.currentTheme;
	}

	setNewTheme(darkTheme: boolean, color: TailwindColor): void {
		const plain = darkTheme ? '-gray-600' : '-gray-400';
		const plainInv = darkTheme ? '-gray-400' : '-gray-600';
		const neutral = darkTheme ? '-gray-700' : '-gray-300';
		const neutralInv = darkTheme ? '-gray-300' : '-gray-700';
		const defaultColor = darkTheme ? '-gray-800' : '-gray-100';
		const defaultInv = darkTheme ? '-gray-100' : '-gray-800';
		const contrast = darkTheme ? '-gray-900' : '-gray-50';
		const contrastInv = darkTheme ? '-gray-50' : '-gray-900';
		const primaryLight = darkTheme ? `-${color.name}-300` : `-${color.name}-500`;
		const primary = darkTheme ? `-${color.name}-400` : `-${color.name}-600`;
		const primaryAlt = darkTheme ? `-${color.name}-600` : `-${color.name}-400`;
		const primaryDark = darkTheme ? `-${color.name}-500` : `-${color.name}-700`;
		const prose = darkTheme ? 'prose prose-invert' : 'prose';
		this.currentTheme.next({
			darkTheme,
			primary,
			primaryLight,
			primaryDark,
			primaryAlt,
			plain,
			plainInv,
			neutral,
			neutralInv,
			default: defaultColor,
			defaultInv,
			contrast,
			contrastInv,
			prose,
		});
	}

	getInverseShade(shade: string) {
		const currentShadeStr = shade.split('-').pop();
		if (!currentShadeStr) {
			return shade;
		}
		if (shade.includes('gray')) {
			const currentShade = parseInt(currentShadeStr, 10);
			if (currentShade >= 200 && currentShade <= 700) {
				const newShade = 1000 - currentShade;
				return shade.replace(currentShadeStr, newShade.toString());
			} else if (currentShade == 100 || currentShade == 800) {
				const newShade = 900 - currentShade;
				return shade.replace(currentShadeStr, newShade.toString());
			} else if (currentShade == 900 || currentShade == 50) {
				const newShade = 950 - currentShade;
				return shade.replace(currentShadeStr, newShade.toString());
			} else {
				return '';
			}
		} else {
			const currentShade = parseInt(currentShadeStr, 10);
			if (currentShade == 400 || currentShade == 600) {
				const newShade = 1000 - currentShade;
				return shade.replace(currentShadeStr, newShade.toString());
			} else if (currentShade == 300) {
				const newShade = 500;
				return shade.replace(currentShadeStr, newShade.toString());
			} else if (currentShade == 500) {
				const newShade = this.isDarkTheme.value ? 700 : 300;
				return shade.replace(currentShadeStr, newShade.toString());
			} else if (currentShade == 700) {
				const newShade = 500;
				return shade.replace(currentShadeStr, newShade.toString());
			} else {
				return '';
			}
		}
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

	setDarkTheme(isDarkTheme: boolean): void {
		this.isDarkTheme.next(isDarkTheme);
		localStorage.setItem(this.themeKey, this.isDarkTheme.value.toString());
		this.setNewTheme(this.isDarkTheme.value, this.currentColor.value);
	}

	getDarkTheme(): Observable<boolean> {
		return this.isDarkTheme;
	}
}

import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class ThemeService {
	private themeKey = 'is-custom-dark-theme';
	private colorKey = 'custom-primary-color';
	private isDarkTheme: BehaviorSubject<boolean>;

	constructor() {
		const savedTheme = localStorage.getItem(this.themeKey) === 'true';
		const savedColor = localStorage.getItem(this.colorKey);

		this.isDarkTheme = new BehaviorSubject<boolean>(savedTheme);
		this.swapThemeColors(savedTheme);
		this.setPrimaryColor(savedColor || '');
	}

	setDarkTheme(isDarkTheme: boolean) {
		this.isDarkTheme.next(isDarkTheme);
		localStorage.setItem(this.themeKey, this.isDarkTheme.value.toString());
		this.swapThemeColors(isDarkTheme);
		const savedColor = localStorage.getItem(this.colorKey);
		this.setPrimaryColor(savedColor || '');
	}

	getDarkTheme(): Observable<boolean> {
		return this.isDarkTheme;
	}

	setPrimaryColor(selectedColor: string) {
		const rootStyle = document.documentElement.style;
		const isDarkTheme = this.isDarkTheme.getValue();
		let newColor: Colors = isDarkTheme ? Colors['green-200'] : Colors['green-500'];
		let newVariant: Colors = isDarkTheme ? Colors['green-400'] : Colors['green-700'];
		switch (selectedColor) {
			case 'yellow':
				newColor = isDarkTheme ? Colors['yellow-200'] : Colors['yellow-500'];
				newVariant = isDarkTheme ? Colors['yellow-400'] : Colors['yellow-700'];
				break;
			case 'orange':
				newColor = isDarkTheme ? Colors['orange-200'] : Colors['orange-500'];
				newVariant = isDarkTheme ? Colors['orange-400'] : Colors['orange-700'];
				break;
			case 'red':
				newColor = isDarkTheme ? Colors['red-200'] : Colors['red-500'];
				newVariant = isDarkTheme ? Colors['red-400'] : Colors['red-700'];
				break;
			case 'pink':
				newColor = isDarkTheme ? Colors['pink-200'] : Colors['pink-500'];
				newVariant = isDarkTheme ? Colors['pink-400'] : Colors['pink-700'];
				break;
			case 'purple':
				newColor = isDarkTheme ? Colors['purple-200'] : Colors['purple-500'];
				newVariant = isDarkTheme ? Colors['purple-400'] : Colors['purple-700'];
				break;
			case 'indigo':
				newColor = isDarkTheme ? Colors['indigo-200'] : Colors['indigo-500'];
				newVariant = isDarkTheme ? Colors['indigo-400'] : Colors['indigo-700'];
				break;
			case 'blue':
				newColor = isDarkTheme ? Colors['blue-200'] : Colors['blue-500'];
				newVariant = isDarkTheme ? Colors['blue-400'] : Colors['blue-700'];
				break;
			case 'teal':
				newColor = isDarkTheme ? Colors['teal-200'] : Colors['teal-500'];
				newVariant = isDarkTheme ? Colors['teal-400'] : Colors['teal-700'];
				break;
			case 'green':
				newColor = isDarkTheme ? Colors['green-200'] : Colors['green-500'];
				newVariant = isDarkTheme ? Colors['green-400'] : Colors['green-700'];
				break;
			default:
				newColor = isDarkTheme ? Colors['green-200'] : Colors['green-500'];
				newVariant = isDarkTheme ? Colors['green-400'] : Colors['green-700'];
				break;
		}
		localStorage.setItem(this.colorKey, selectedColor);
		rootStyle.setProperty(Variables.PRIMARY, newColor);
		rootStyle.setProperty(Variables.PRIMARY_VARIANT, newVariant);
	}

	swapThemeColors(isDarkTheme: boolean) {
		const rootStyle = document.documentElement.style;
		const neutral = isDarkTheme ? Colors['gray-700'] : Colors['gray-400'];
		const default1 = isDarkTheme ? Colors['gray-900'] : Colors['gray-200'];
		const default2 = isDarkTheme ? Colors['gray-200'] : Colors['gray-900'];
		const contrast1 = isDarkTheme ? Colors.black : Colors.white;
		const contrast2 = isDarkTheme ? Colors.white : Colors.black;
		rootStyle.setProperty(Variables.NEUTRAL, neutral);
		rootStyle.setProperty(Variables.DEFAULT, default1);
		rootStyle.setProperty(Variables.DEFAULT_INV, default2);
		rootStyle.setProperty(Variables.CONTRAST, contrast1);
		rootStyle.setProperty(Variables.CONTRAST_INV, contrast2);
	}
}

export enum Variables {
	DARK = '--dark',
	NEUTRAL = '--neutral',
	PRIMARY = '--primary',
	PRIMARY_VARIANT = '--primary-variant',
	SECONDARY = '--secondary',
	DEFAULT = '--default',
	DEFAULT_INV = '--default-inverse',
	CONTRAST = '--contrast',
	CONTRAST_INV = '--contrast-inverse',
}

export enum Colors {
	'black' = '#000',
	'white' = '#fff',
	'gray-100' = '#f7fafc',
	'gray-200' = '#edf2f7',
	'gray-300' = '#e2e8f0',
	'gray-400' = '#cbd5e0',
	'gray-500' = '#a0aec0',
	'gray-600' = '#718096',
	'gray-700' = '#4a5568',
	'gray-800' = '#2d3748',
	'gray-900' = '#1a202c',
	'red-100' = '#fff5f5',
	'red-200' = '#fed7d7',
	'red-300' = '#feb2b2',
	'red-400' = '#fc8181',
	'red-500' = '#f56565',
	'red-600' = '#e53e3e',
	'red-700' = '#c53030',
	'red-800' = '#9b2c2c',
	'red-900' = '#742a2a',
	'orange-100' = '#fffaf0',
	'orange-200' = '#feebc8',
	'orange-300' = '#fbd38d',
	'orange-400' = '#f6ad55',
	'orange-500' = '#ed8936',
	'orange-600' = '#dd6b20',
	'orange-700' = '#c05621',
	'orange-800' = '#9c4221',
	'orange-900' = '#7b341e',
	'yellow-100' = '#fffff0',
	'yellow-200' = '#fefcbf',
	'yellow-300' = '#faf089',
	'yellow-400' = '#f6e05e',
	'yellow-500' = '#ecc94b',
	'yellow-600' = '#d69e2e',
	'yellow-700' = '#b7791f',
	'yellow-800' = '#975a16',
	'yellow-900' = '#744210',
	'green-100' = '#f0fff4',
	'green-200' = '#c6f6d5',
	'green-300' = '#9ae6b4',
	'green-400' = '#68d391',
	'green-500' = '#48bb78',
	'green-600' = '#38a169',
	'green-700' = '#2f855a',
	'green-800' = '#276749',
	'green-900' = '#22543d',
	'teal-100' = '#e6fffa',
	'teal-200' = '#b2f5ea',
	'teal-300' = '#81e6d9',
	'teal-400' = '#4fd1c5',
	'teal-500' = '#38b2ac',
	'teal-600' = '#319795',
	'teal-700' = '#2c7a7b',
	'teal-800' = '#285e61',
	'teal-900' = '#234e52',
	'blue-100' = '#ebf8ff',
	'blue-200' = '#bee3f8',
	'blue-300' = '#90cdf4',
	'blue-400' = '#63b3ed',
	'blue-500' = '#4299e1',
	'blue-600' = '#3182ce',
	'blue-700' = '#2b6cb0',
	'blue-800' = '#2c5282',
	'blue-900' = '#2a4365',
	'indigo-100' = '#ebf4ff',
	'indigo-200' = '#c3dafe',
	'indigo-300' = '#a3bffa',
	'indigo-400' = '#7f9cf5',
	'indigo-500' = '#667eea',
	'indigo-600' = '#5a67d8',
	'indigo-700' = '#4c51bf',
	'indigo-800' = '#434190',
	'indigo-900' = '#3c366b',
	'purple-100' = '#faf5ff',
	'purple-200' = '#e9d8fd',
	'purple-300' = '#d6bcfa',
	'purple-400' = '#b794f4',
	'purple-500' = '#9f7aea',
	'purple-600' = '#805ad5',
	'purple-700' = '#6b46c1',
	'purple-800' = '#553c9a',
	'purple-900' = '#44337a',
	'pink-100' = '#fff5f7',
	'pink-200' = '#fed7e2',
	'pink-300' = '#fbb6ce',
	'pink-400' = '#f687b3',
	'pink-500' = '#ed64a6',
	'pink-600' = '#d53f8c',
	'pink-700' = '#b83280',
	'pink-800' = '#97266d',
	'pink-900' = '#702459',
}

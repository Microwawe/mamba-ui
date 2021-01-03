import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class ThemeService {
	private themeKey = 'is-custom-dark-theme';
	private isDarkTheme: BehaviorSubject<boolean>;

	constructor() {
		const prefersDarkTheme =
			window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		const useDarkTheme = localStorage.getItem(this.themeKey)
			? localStorage.getItem(this.themeKey) === 'true'
			: prefersDarkTheme;
		this.isDarkTheme = new BehaviorSubject<boolean>(useDarkTheme);
		localStorage.setItem(this.themeKey, this.isDarkTheme.value.toString());
	}

	setDarkTheme(isDarkTheme: boolean) {
		this.isDarkTheme.next(isDarkTheme);
		localStorage.setItem(this.themeKey, this.isDarkTheme.value.toString());
	}

	getDarkTheme(): Observable<boolean> {
		return this.isDarkTheme;
	}
}

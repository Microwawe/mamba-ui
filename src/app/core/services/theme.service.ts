import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class ThemeService {
	private themeKey = 'is-custom-dark-theme';
	private isDarkTheme: BehaviorSubject<boolean>;

	constructor() {
		const savedTheme = localStorage.getItem(this.themeKey) === 'true';
		this.isDarkTheme = new BehaviorSubject<boolean>(savedTheme);
	}

	setDarkTheme(isDarkTheme: boolean) {
		this.isDarkTheme.next(isDarkTheme);
		localStorage.setItem(this.themeKey, this.isDarkTheme.value.toString());
	}

	getDarkTheme(): Observable<boolean> {
		return this.isDarkTheme;
	}
}

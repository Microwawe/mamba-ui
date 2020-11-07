import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class ThemeService {
	private key = 'is-custom-dark-theme';
	private isDarkTheme: BehaviorSubject<boolean>;

	constructor() {
		console.log('theme constructor');
		this.isDarkTheme = new BehaviorSubject<boolean>(
			localStorage.getItem(this.key) === 'true'
		);
		console.log(this.isDarkTheme.getValue());
	}

	setDarkTheme(isDarkTheme: boolean) {
		this.isDarkTheme.next(isDarkTheme);
		localStorage.setItem(this.key, this.isDarkTheme.value.toString());
	}

	getDarkTheme(): Observable<boolean> {
		return this.isDarkTheme;
	}
}

import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ColorService {
	private key = 'custom-current-color';
	private currentColor: BehaviorSubject<string>;
	private defaultColor = 'purple';
	colors = [
		'yellow',
		'amber',
		'orange',
		'red',
		'rose',
		'pink',
		'fuchsia',
		'purple',
		'violet',
		'indigo',
		'blue',
		'lightBlue',
		'cyan',
		'teal',
		'emerald',
		'green',
		'lime',
	];

	constructor() {
		const savedColor = localStorage.getItem(this.key);
		const color = savedColor ? JSON.parse(savedColor) : this.defaultColor;
		this.currentColor = new BehaviorSubject<string>(color);
	}

	setCurrentColor(currentColor: string) {
		localStorage.setItem(this.key, JSON.stringify(currentColor));
		this.currentColor.next(currentColor);
	}

	setCurrentColorString(currentColor: string) {
		const newColor: string =
			this.colors.find(color => color === currentColor) || this.defaultColor;
		localStorage.setItem(this.key, JSON.stringify(newColor));
		this.currentColor.next(newColor);
	}

	observeCurrentColor(): Observable<string> {
		return this.currentColor.asObservable();
	}
}

export interface TailwindColor {
	name: string;
	shade: number;
}

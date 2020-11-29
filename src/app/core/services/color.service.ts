import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ColorService {
	private key = 'custom-current-color';
	private currentColor: BehaviorSubject<TailwindColor>;
	private defaultColor: TailwindColor = {
		name: 'purple',
		shade: 500,
	};
	colors: TailwindColor[] = [
		{
			name: 'yellow',
			shade: 500,
		},
		{
			name: 'orange',
			shade: 500,
		},
		{
			name: 'red',
			shade: 500,
		},
		{
			name: 'pink',
			shade: 500,
		},
		{
			name: 'purple',
			shade: 500,
		},
		{
			name: 'indigo',
			shade: 500,
		},
		{
			name: 'blue',
			shade: 500,
		},
		{
			name: 'teal',
			shade: 500,
		},
		{
			name: 'green',
			shade: 500,
		},
	];

	constructor() {
		const savedColor = localStorage.getItem(this.key);
		const color = savedColor ? JSON.parse(savedColor) : this.defaultColor;
		this.currentColor = new BehaviorSubject<TailwindColor>(color);
	}

	setCurrentColor(currentColor: TailwindColor) {
		localStorage.setItem(this.key, JSON.stringify(currentColor));
		this.currentColor.next(currentColor);
	}

	setCurrentColorString(currentColor: string) {
		const newColor: TailwindColor =
			this.colors.find(color => color.name === currentColor) || this.defaultColor;
		localStorage.setItem(this.key, JSON.stringify(newColor));
		this.currentColor.next(newColor);
	}

	observeCurrentColor(): Observable<TailwindColor> {
		return this.currentColor.asObservable();
	}
}

export interface TailwindColor {
	name: string;
	shade: number;
}

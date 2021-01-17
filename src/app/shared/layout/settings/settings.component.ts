import {Component, OnDestroy, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';
import {TailwindColor} from '@shared/interfaces/tailwind-colors.interface';
import {Observable, Subscription} from 'rxjs';

@Component({
	selector: 'custom-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent extends BaseComponent implements OnInit, OnDestroy {
	colorSub!: Subscription;
	isDarkTheme!: Observable<boolean>;
	colorsOpen = false;
	colors: TailwindColor[] = [];
	selectedColor!: TailwindColor;

	constructor() {
		super();
	}

	ngOnInit() {
		this.isDarkTheme = this.themeService.getDarkTheme();
		this.colors = this.colorService.getAllColors();
		this.colorSub = this.colorService.getCurrentColor().subscribe(color => {
			this.selectedColor = color;
		});
	}

	changeColor(color: TailwindColor) {
		this.colorService.setCurrentColor(color);
	}

	toggleDarkTheme(dark: boolean) {
		this.themeService.setDarkTheme(dark);
	}

	toggleColors() {
		this.colorsOpen = !this.colorsOpen;
	}

	ngOnDestroy() {
		this.colorSub.unsubscribe();
	}
}

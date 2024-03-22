import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';
import {PlausibleEvent} from '@shared/enum/plausible.event.enum';
import {TailwindColor} from '@shared/interfaces/tailwind-colors.interface';
import {AnalyticsService} from '@shared/services/analytics.service';
import {Observable, Subscription} from 'rxjs';

@Component({
	selector: 'custom-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent extends BaseComponent implements OnInit, OnDestroy, AfterViewInit {
	colorSub!: Subscription;
	isDarkTheme!: Observable<boolean>;
	colorsOpen = false;
	loaded = false;
	colors: TailwindColor[] = [];
	selectedColor!: TailwindColor;

	constructor(private analytics: AnalyticsService) {
		super();
	}

	ngOnInit(): void {
		this.isDarkTheme = this.themeService.getDarkTheme();
		this.colors = this.themeService.getAllColors();
		this.colorSub = this.themeService.getCurrentColor().subscribe((color: TailwindColor) => {
			this.selectedColor = color;
		});
	}

	ngAfterViewInit(): void {
		setTimeout(() => {
			this.loaded = true;
		}, 1500);
	}

	changeColor(color: TailwindColor): void {
		this.analytics.triggerEvent(PlausibleEvent.CHANGE_COLOR, {color: color});
		this.themeService.setCurrentColor(color);
	}

	toggleDarkTheme(dark: boolean): void {
		this.analytics.triggerEvent(PlausibleEvent.CHANGE_THEME, {darkTheme: dark});
		this.themeService.setDarkTheme(dark);
	}

	toggleColors(): void {
		this.colorsOpen = !this.colorsOpen;
	}

	ngOnDestroy(): void {
		this.colorSub.unsubscribe();
	}
}

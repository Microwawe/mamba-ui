import {Component, OnInit} from '@angular/core';

import {ThemeService} from '@core/services/theme.service';
import {BaseComponent} from '@shared/components/base/base.component';
import {Observable} from 'rxjs';

@Component({
	selector: 'custom-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent extends BaseComponent implements OnInit {
	isDarkTheme!: Observable<boolean>;
	colors: string[] = [];
	colorsOpen = false;

	constructor(private themeService: ThemeService) {
		super();
	}

	ngOnInit() {
		this.isDarkTheme = this.themeService.getDarkTheme();
		this.colors = [
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
	}

	changeColor(color: string) {
		// this.themeService.setPrimaryColor(color);
		this.colorService.setCurrentColorString(color);
	}

	toggleDarkTheme(dark: boolean) {
		this.themeService.setDarkTheme(dark);
	}

	toggleColors() {
		this.colorsOpen = !this.colorsOpen;
	}
}

import {Component, OnInit} from '@angular/core';
import {ThemeService} from '@core/services/theme.service';
import {Observable} from 'rxjs';

import {BaseComponent} from '../base/base.component';

@Component({
	selector: 'custom-theme-selector',
	templateUrl: './theme-selector.component.html',
	styleUrls: ['./theme-selector.component.scss'],
})
export class ThemeSelectorComponent extends BaseComponent implements OnInit {
	isDarkTheme!: Observable<boolean>;

	constructor(protected themeService: ThemeService) {
		super();
	}

	ngOnInit() {
		this.isDarkTheme = this.themeService.getDarkTheme();
	}

	toggleDarkTheme(dark: boolean) {
		this.themeService.setDarkTheme(dark);
	}
}

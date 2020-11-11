import {Component, OnInit} from '@angular/core';
import {ThemeService} from '@core/services/theme.service';
import {Observable} from 'rxjs';

@Component({
	selector: 'custom-theme-selector',
	templateUrl: './theme-selector.component.html',
	styleUrls: ['./theme-selector.component.scss'],
})
export class ThemeSelectorComponent implements OnInit {
	isDarkTheme!: Observable<boolean>;

	constructor(private themeService: ThemeService) {}

	ngOnInit() {
		this.isDarkTheme = this.themeService.getDarkTheme();
	}

	toggleDarkTheme(dark: boolean) {
		this.themeService.setDarkTheme(dark);
	}
}

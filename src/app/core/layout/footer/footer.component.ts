import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {ThemeService} from '@core/services/theme.service';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-footer',
	templateUrl: './footer.component.html',
})
export class FooterComponent extends BaseComponent implements OnInit {
	currentYear!: number;
	isDarkTheme!: Observable<boolean>;

	constructor(private themeService: ThemeService) {
		super();
	}

	ngOnInit() {
		this.currentYear = new Date().getFullYear();
		this.isDarkTheme = this.themeService.getDarkTheme();
	}

	toggleDarkTheme(dark: boolean) {
		this.themeService.setDarkTheme(dark);
	}
}

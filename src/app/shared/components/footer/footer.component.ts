import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {environment} from '@env';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-footer',
	templateUrl: './footer.component.html',
})
export class FooterComponent extends BaseComponent implements OnInit {
	currentYear!: number;
	isDarkTheme!: Observable<boolean>;
	roundedComponentTotal: number;

	constructor() {
		super();
		this.roundedComponentTotal = environment.roundedComponentTotal;
	}

	ngOnInit(): void {
		this.currentYear = new Date().getFullYear();
		this.isDarkTheme = this.themeService.getDarkTheme();
	}

	toggleDarkTheme(dark: boolean): void {
		this.themeService.setDarkTheme(dark);
	}
}

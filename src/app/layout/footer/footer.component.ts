import {Component, OnInit} from '@angular/core';
import {ThemeService} from '@core/services/theme.service';
import {Observable} from 'rxjs';

@Component({
	selector: 'custom-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
	currentYear!: number;
	isDarkTheme!: Observable<boolean>;

	constructor(private themeService: ThemeService) {}

	ngOnInit() {
		this.currentYear = new Date().getFullYear();
		this.isDarkTheme = this.themeService.getDarkTheme();
	}

	toggleDarkTheme(dark: boolean) {
		this.themeService.setDarkTheme(dark);
	}
}
